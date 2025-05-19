// Common word lists for passphrase and username generation
const commonWords = [
    'apple', 'banana', 'orange', 'grape', 'strawberry',
    'dog', 'cat', 'bird', 'fish', 'rabbit',
    'happy', 'sunny', 'bright', 'swift', 'clever',
    'star', 'moon', 'sky', 'ocean', 'mountain',
    'forest', 'river', 'lake', 'desert', 'island',
    'robot', 'pixel', 'crypto', 'cyber', 'digital',
    'cosmic', 'sonic', 'ember', 'blaze', 'frost',
    'shadow', 'crystal', 'nebula', 'aurora', 'stellar',
    'thunder', 'lightning', 'storm', 'breeze', 'cloud'
];

// Live updates for all sliders
document.getElementById('length').addEventListener('input', (event) => {
    document.getElementById('length-value').textContent = event.target.value;
});

document.getElementById('word-count').addEventListener('input', (event) => {
    document.getElementById('word-count-value').textContent = event.target.value;
});

document.getElementById('username-length').addEventListener('input', (event) => {
    document.getElementById('username-length-value').textContent = event.target.value;
});

document.getElementById('username-word-count').addEventListener('input', (event) => {
    document.getElementById('username-word-count-value').textContent = event.target.value;
});

// Tab switching functionality
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.add('hidden'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show selected tab content and set button to active
    document.getElementById(`${tabName}-tab`).classList.remove('hidden');
    document.getElementById(`tab-${tabName}`).classList.add('active');
    
    // Hide output when switching tabs
    document.getElementById('output').classList.add('hidden');
}

// Dark mode toggle
let darkMode = localStorage.getItem('darkMode') === 'true';
if (darkMode) {
    document.body.classList.add('bg-gray-800');
    document.body.classList.remove('bg-gray-100');
}

const toggleDarkMode = () => {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('bg-gray-800', darkMode);
    document.body.classList.toggle('bg-gray-100', !darkMode);
};

// Attach dark mode toggle to button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Display error messages non-intrusively
function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    setTimeout(() => errorDiv.classList.add('hidden'), 3000);
}

// Input validation
function validateInput(value, minValue) {
    return !isNaN(value) && value >= minValue;
}

// Password generation
function generatePassword() {
    // Clear previous error
    document.getElementById('error').classList.add('hidden');

    // Get input values
    const lowercaseCount = parseInt(document.getElementById('lowercase').value);
    const uppercaseCount = parseInt(document.getElementById('uppercase').value);
    const numbersCount = parseInt(document.getElementById('numbers').value);
    const specialCount = parseInt(document.getElementById('special').value);
    const excludeAmbiguous = document.getElementById('exclude-ambiguous').checked;
    const passwordLength = parseInt(document.getElementById('length').value);

    // Validate inputs
    if (!validateInput(lowercaseCount, 0) || !validateInput(uppercaseCount, 0) ||
        !validateInput(numbersCount, 0) || !validateInput(specialCount, 0)) {
        showError('Please enter valid non-negative numbers.');
        return;
    }

    // Validate total character count
    const totalCount = lowercaseCount + uppercaseCount + numbersCount + specialCount;
    if (totalCount > passwordLength) {
        showError('Sum of character counts exceeds password length.');
        return;
    }
    if (totalCount === 0) {
        showError('Please select at least one character type.');
        return;
    }

    // Set up possible characters
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let special = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    // Remove ambiguous characters if checked
    if (excludeAmbiguous) {
        lowercase = lowercase.replace(/[l]/g, '');
        uppercase = uppercase.replace(/[IO]/g, '');
        numbers = numbers.replace(/[01]/g, '');
        special = special.replace(/[(){}\[\]]/g, '');
    }

    // Generate password
    let password = '';
    password += getRandomChars(lowercase, lowercaseCount);
    password += getRandomChars(uppercase, uppercaseCount);
    password += getRandomChars(numbers, numbersCount);
    password += getRandomChars(special, specialCount);

    // Fill remaining length with random characters
    if (password.length < passwordLength) {
        let remainingChars = '';
        if (lowercaseCount > 0) remainingChars += lowercase;
        if (uppercaseCount > 0) remainingChars += uppercase;
        if (numbersCount > 0) remainingChars += numbers;
        if (specialCount > 0) remainingChars += special;
        
        // If we've excluded all possible characters, fall back to non-ambiguous ones
        if (remainingChars.length === 0) {
            remainingChars = lowercase + uppercase + numbers + special;
        }
        
        password += getRandomChars(remainingChars, passwordLength - password.length);
    }

    // Shuffle the password
    password = shuffleString(password);

    // Display password
    displayResult(password);

    // Calculate strength and crack time
    calculateStrength(password);
    estimateCrackTime(password, lowercase, uppercase, numbers, special);
}

// Passphrase generation
function generatePassphrase() {
    // Get input values
    const wordCount = parseInt(document.getElementById('word-count').value);
    const separator = document.getElementById('separator').value;
    const capitalizeWords = document.getElementById('capitalize-words').checked;
    const includeNumber = document.getElementById('include-number').checked;
    const includeSpecial = document.getElementById('include-special').checked;
    
    // Generate a passphrase
    let passphrase = [];
    for (let i = 0; i < wordCount; i++) {
        let word = commonWords[Math.floor(Math.random() * commonWords.length)];
        if (capitalizeWords) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        passphrase.push(word);
    }
    
    // Join words with separator
    let result = passphrase.join(separator);
    
    // Add number if selected
    if (includeNumber) {
        result += Math.floor(Math.random() * 1000);
    }
    
    // Add special character if selected
    if (includeSpecial) {
        const specialChars = '!@#$%^&*()-_=+';
        result += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    }
    
    // Display passphrase
    displayResult(result);
    
    // Calculate strength
    calculateStrength(result);
    estimatePassphraseCrackTime(result, wordCount);
}

// Username generation
function generateUsername() {
    // Get input values
    const targetLength = parseInt(document.getElementById('username-length').value);
    const wordCount = parseInt(document.getElementById('username-word-count').value);
    const includeNumber = document.getElementById('include-number-username').checked;
    const allLowercase = document.getElementById('all-lowercase').checked;
    
    // Generate username by combining random words
    let selectedWords = [];
    let currentLength = 0;
    
    // Select random words up to the word count
    for (let i = 0; i < wordCount; i++) {
        const word = commonWords[Math.floor(Math.random() * commonWords.length)];
        selectedWords.push(word);
        currentLength += word.length;
    }
    
    // Join words
    let username = selectedWords.join('');
    
    // Add number if selected and there's room
    if (includeNumber && username.length < targetLength) {
        const numDigits = Math.min(4, targetLength - username.length);
        const maxNum = Math.pow(10, numDigits) - 1;
        username += Math.floor(Math.random() * maxNum);
    }
    
    // Truncate if too long
    if (username.length > targetLength) {
        username = username.substring(0, targetLength);
    }
    
    // Apply case formatting
    if (allLowercase) {
        username = username.toLowerCase();
    } else {
        // Capitalize first letter of each word
        username = selectedWords.map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
        
        // Add number again if needed (after formatting)
        if (includeNumber && username.length < targetLength) {
            const numDigits = Math.min(4, targetLength - username.length);
            const maxNum = Math.pow(10, numDigits) - 1;
            username += Math.floor(Math.random() * maxNum);
        }
        
        // Truncate again if needed
        if (username.length > targetLength) {
            username = username.substring(0, targetLength);
        }
    }
    
    // Display username
    displayResult(username);
    
    // Calculate strength - usernames are usually weaker than passwords
    const strengthBar = document.getElementById('strength-bar-fill');
    strengthBar.style.width = '25%';
    strengthBar.style.backgroundColor = '#e53e3e'; // Red
    
    // Simple crack time estimate for username
    document.getElementById('crack-time').innerText = 
        'Note: Usernames are not meant to be secure passwords.';
}

// Utility functions
function getRandomChars(charSet, count) {
    if (!charSet || count <= 0) return '';
    if (charSet.length === 0) return ''; // Prevent empty charset
    
    const chars = [];
    for (let i = 0; i < count; i++) {
        chars.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
    }
    return chars.join('');
}

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function displayResult(value) {
    document.getElementById('result').textContent = value;
    document.getElementById('output').classList.remove('hidden');
}

function copyToClipboard() {
    const result = document.getElementById('result').textContent;
    navigator.clipboard.writeText(result)
        .then(() => showError('Copied to clipboard!'))
        .catch(() => showError('Failed to copy to clipboard'));
}

// Load zxcvbn library
document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.src = 'zxcvbn.js'; // make sure this path is correct
    document.head.appendChild(script);
});

function calculateStrength(text) {
    // Check if zxcvbn is loaded
    if (typeof zxcvbn === 'undefined') {
        // Fall back to basic strength calculation if zxcvbn isn't loaded
        basicStrengthCalculation(text);
        return;
    }

    // Use zxcvbn for accurate password strength estimation
    const result = zxcvbn(text);
    
    // Update strength bar based on zxcvbn score (0-4)
    const strengthBar = document.getElementById('strength-bar-fill');
    const score = result.score;
    
    // Convert score to percentage (0-4 scale to 0-100%)
    const percentage = (score + 1) * 20;
    strengthBar.style.width = `${percentage}%`;
    strengthBar.setAttribute('aria-valuenow', percentage);
    
    // Set color based on score
    const colors = ['#e53e3e', '#e53e3e', '#ed8936', '#f6ad55', '#38a169', '#2b6cb0'];
    strengthBar.style.backgroundColor = colors[score];
    
    // Display crack time from zxcvbn
    displayZxcvbnCrackTime(result.crack_times_display.offline_fast_hashing_1e10_per_second);
}

function basicStrengthCalculation(text) {
    // Basic strength calculation as fallback if zxcvbn isn't loaded
    let strength = 0;

    // Length criteria
    if (text.length >= 8) strength += 1;
    
    // Character type criteria
    if (/[a-z]/.test(text)) strength += 1;
    if (/[A-Z]/.test(text)) strength += 1;
    if (/[0-9]/.test(text)) strength += 1;
    if (/[!@#$%^&*()\-_=+[\]{}|;:,.<>?]/.test(text)) strength += 1;

    const strengthBar = document.getElementById('strength-bar-fill');
    strengthBar.setAttribute('aria-valuenow', strength * 20);

    switch (strength) {
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.backgroundColor = '#e53e3e'; // Red
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.backgroundColor = '#ed8936'; // Orange
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.backgroundColor = '#f6ad55'; // Yellow
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.backgroundColor = '#38a169'; // Green
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = '#2b6cb0'; // Blue
            break;
        default:
            strengthBar.style.width = '0';
            break;
    }
    
    // Fall back to simple crack time estimation
    estimateCrackTimeBasic(text);
}

function estimateCrackTime(password, lowercase, uppercase, numbers, special) {
    // If zxcvbn is available, we don't need this function (calculateStrength will handle it)
    if (typeof zxcvbn !== 'undefined') return;
    
    // Calculate character pool size based on used character sets
    let charPoolSize = 0;
    if (/[a-z]/.test(password)) charPoolSize += lowercase.length;
    if (/[A-Z]/.test(password)) charPoolSize += uppercase.length;
    if (/[0-9]/.test(password)) charPoolSize += numbers.length;
    if (/[!@#$%^&*()\-_=+[\]{}|;:,.<>?]/.test(password)) charPoolSize += special.length;

    // Prevent division by zero
    if (charPoolSize === 0) charPoolSize = 1;

    // Rough estimate: (charPoolSize^length) / (100 trillion guesses per second)
    const complexity = Math.pow(charPoolSize, password.length);
    const crackTimeSeconds = complexity / 100_000_000_000_000;
    
    displayCrackTime(crackTimeSeconds); 
}

function estimatePassphraseCrackTime(passphrase, wordCount) {
    // If zxcvbn is available, we don't need this function (calculateStrength will handle it)
    if (typeof zxcvbn !== 'undefined') return;
    
    // Estimate based on number of words in dictionary and word count
    // Assuming 10,000 common words in attacker's dictionary
    const dictionarySize = 10000;
    const complexity = Math.pow(dictionarySize, wordCount);
    
    // Add complexity for numbers and special chars
    let extraComplexity = 1;
    if (/[0-9]/.test(passphrase)) extraComplexity *= 10;
    if (/[!@#$%^&*()\-_=+]/.test(passphrase)) extraComplexity *= 15;
    
    // Rough estimate: (complexity * extraComplexity) / (1 million guesses per second)
    // Passphrases are harder to crack with specialized hardware
    const crackTimeSeconds = (complexity * extraComplexity) / 1_000_000;
    
    displayCrackTime(crackTimeSeconds);
}

function estimateCrackTimeBasic(text) {
    // Very basic estimation when zxcvbn isn't available
    const charTypes = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/];
    const charSetSize = charTypes.reduce((acc, regex) => acc + (regex.test(text) ? 1 : 0), 0) * 26;
    
    // Simple entropy calculation
    const entropy = Math.log2(Math.pow(Math.max(charSetSize, 1), text.length));
    
    // Convert entropy to crack time (very rough estimate)
    let crackTimeSeconds;
    if (entropy < 28) {
        crackTimeSeconds = Math.pow(2, entropy) / 1_000_000_000_000; // Trillion guesses/sec
    } else if (entropy < 60) {
        crackTimeSeconds = Math.pow(2, entropy) / 1_000_000_000; // Billion guesses/sec
    } else {
        crackTimeSeconds = Math.pow(2, entropy) / 1_000_000; // Million guesses/sec
    }
    
    displayCrackTime(crackTimeSeconds);
}

function displayZxcvbnCrackTime(crackTimeText) {
    document.getElementById('crack-time').innerText = `Approx. crack time: ${crackTimeText}`;
}

function displayCrackTime(seconds) {
    let crackTimeText;
    
    if (seconds < 60) {
        crackTimeText = `${seconds.toFixed(2)} seconds`;
    } else if (seconds < 3600) {
        crackTimeText = `${(seconds / 60).toFixed(2)} minutes`;
    } else if (seconds < 86400) {
        crackTimeText = `${(seconds / 3600).toFixed(2)} hours`;
    } else if (seconds < 31536000) {
        crackTimeText = `${(seconds / 86400).toFixed(2)} days`;
    } else if (isFinite(seconds)) {
        crackTimeText = `${(seconds / 31536000).toFixed(2)} years`;
    } else {
        crackTimeText = 'effectively infinite';
    }
    
    document.getElementById('crack-time').innerText = `Approx. crack time: ${crackTimeText}`;
}
