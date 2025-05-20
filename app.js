// Note: Consider expanding this list (e.g., 2048 words like Diceware) for stronger passphrases
const commonWords = [
    "ability", "able", "about", "above", "accept", "account", "across", "action",
    "activity", "actually", "add", "address", "administration", "admit", "adult",
    "affect", "after", "again", "against", "agency", "agent", "agree", "agreement",
    "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "also",
    "although", "always", "American", "among", "amount", "analysis", "and", "animal",
    "another", "answer", "any", "anyone", "anything", "appear", "apply", "approach",
    "area", "argue"
];

// Helper function to generate cryptographically secure random integer [0, max)
function getCryptoRandomInt(max) {
    if (max <= 0) return 0;
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % max;
}

// Load zxcvbn library with promise-based approach
let zxcvbnLoaded = false;
function loadZxcvbn() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'zxcvbn.js'; // Ensure correct path
        script.onload = () => {
            zxcvbnLoaded = true;
            resolve();
        };
        script.onerror = () => reject(new Error('Failed to load zxcvbn'));
        document.head.appendChild(script);
    });
}

// Check if DOM element exists
function checkElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with ID "${id}" not found`);
        return null;
    }
    return element;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadZxcvbn().catch(err => {
        console.error(err.message);
        const crackTime = checkElement('crack-time');
        if (crackTime) crackTime.innerText = 'Strength calculation unavailable';
    });

    // Slider event listeners
    const sliders = [
        { id: 'length', valueId: 'length-value' },
        { id: 'word-count', valueId: 'word-count-value' },
        { id: 'username-length', valueId: 'username-length-value' },
        { id: 'username-word-count', valueId: 'username-word-count-value' }
    ];

    sliders.forEach(({ id, valueId }) => {
        const slider = checkElement(id);
        const valueDisplay = checkElement(valueId);
        if (slider && valueDisplay) {
            slider.addEventListener('input', (event) => {
                valueDisplay.textContent = event.target.value;
            });
        }
    });

    // Dark mode toggle
    const darkModeToggle = checkElement('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});

// Tab switching functionality
function switchTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.add('hidden'));
    
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    const tabContent = checkElement(`${tabName}-tab`);
    const tabButton = checkElement(`tab-${tabName}`);
    const output = checkElement('output');
    
    if (tabContent) tabContent.classList.remove('hidden');
    if (tabButton) tabButton.classList.add('active');
    if (output) output.classList.add('hidden');
}

// Dark mode toggle
let darkMode = localStorage.getItem('darkMode') === 'true';
if (darkMode) {
    document.body.classList.add('bg-gray-800');
    document.body.classList.remove('bg-gray-100');
}

function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('bg-gray-800', darkMode);
    document.body.classList.toggle('bg-gray-100', !darkMode);
}

// Display error messages
function showError(message) {
    const errorDiv = checkElement('error');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
        setTimeout(() => errorDiv.classList.add('hidden'), 3000);
    }
}

// Input validation
function validateInput(value, minValue, maxValue = Infinity) {
    return value !== undefined && value !== null && !isNaN(value) && 
           value >= minValue && value <= maxValue;
}

// Password generation
function generatePassword() {
    const error = checkElement('error');
    if (error) error.classList.add('hidden');

    const lowercaseInput = checkElement('lowercase');
    const uppercaseInput = checkElement('uppercase');
    const numbersInput = checkElement('numbers');
    const specialInput = checkElement('special');
    const excludeAmbiguousInput = checkElement('exclude-ambiguous');
    const lengthInput = checkElement('length');

    if (!lowercaseInput || !uppercaseInput || !numbersInput || !specialInput || 
        !excludeAmbiguousInput || !lengthInput) {
        showError('Required input fields are missing.');
        return;
    }

    const lowercaseCount = parseInt(lowercaseInput.value);
    const uppercaseCount = parseInt(uppercaseInput.value);
    const numbersCount = parseInt(numbersInput.value);
    const specialCount = parseInt(specialInput.value);
    const excludeAmbiguous = excludeAmbiguousInput.checked;
    const passwordLength = parseInt(lengthInput.value);

    if (!validateInput(lowercaseCount, 0, 1000) || !validateInput(uppercaseCount, 0, 1000) ||
        !validateInput(numbersCount, 0, 1000) || !validateInput(specialCount, 0, 1000) ||
        !validateInput(passwordLength, 1, 1000)) {
        showError('Please enter valid numbers (1-1000 for length, 0-1000 for counts).');
        return;
    }

    const totalCount = lowercaseCount + uppercaseCount + numbersCount + specialCount;
    if (totalCount > passwordLength) {
        showError('Sum of character counts exceeds password length.');
        return;
    }
    if (totalCount === 0) {
        showError('Please select at least one character type.');
        return;
    }

    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let special = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    if (excludeAmbiguous) {
        lowercase = lowercase.replace(/[l]/g, '');
        uppercase = uppercase.replace(/[IO]/g, '');
        numbers = numbers.replace(/[01]/g, '');
        special = special.replace(/[(){}\[\]]/g, '');
    }

    let password = '';
    password += getRandomChars(lowercase, lowercaseCount);
    password += getRandomChars(uppercase, uppercaseCount);
    password += getRandomChars(numbers, numbersCount);
    password += getRandomChars(special, specialCount);

    if (password.length < passwordLength) {
        let remainingChars = '';
        if (lowercaseCount > 0) remainingChars += lowercase;
        if (uppercaseCount > 0) remainingChars += uppercase;
        if (numbersCount > 0) remainingChars += numbers;
        if (specialCount > 0) remainingChars += special;
        
        if (remainingChars.length === 0) {
            // Rebuild fallback with ambiguous exclusions
            remainingChars = 'abcdefghijklmnopqrstuvwxyz'.replace(/[l]/g, '') +
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.replace(/[IO]/g, '') +
                            '0123456789'.replace(/[01]/g, '') +
                            '!@#$%^&*()-_=+[]{}|;:,.<>?'.replace(/[(){}\[\]]/g, '');
        }
        
        password += getRandomChars(remainingChars, passwordLength - password.length);
    }

    password = shuffleString(password);
    displayResult(password);
    calculateStrength(password);
    estimateCrackTime(password, lowercase, uppercase, numbers, special);
}

// Passphrase generation
function generatePassphrase() {
    const error = checkElement('error');
    if (error) error.classList.add('hidden');

    const wordCountInput = checkElement('word-count');
    const separatorInput = checkElement('separator');
    const capitalizeWordsInput = checkElement('capitalize-words');
    const includeNumberInput = checkElement('include-number');
    const includeSpecialInput = checkElement('include-special');

    if (!wordCountInput || !separatorInput || !capitalizeWordsInput || 
        !includeNumberInput || !includeSpecialInput) {
        showError('Required input fields are missing.');
        return;
    }

    const wordCount = parseInt(wordCountInput.value);
    const separator = separatorInput.value;
    const capitalizeWords = capitalizeWordsInput.checked;
    const includeNumber = includeNumberInput.checked;
    const includeSpecial = includeSpecialInput.checked;
    
    if (!validateInput(wordCount, 1, 100)) {
        showError('Word count must be between 1 and 100.');
        return;
    }
    
    let passphrase = [];
    for (let i = 0; i < wordCount; i++) {
        const wordIndex = getCryptoRandomInt(commonWords.length);
        let word = commonWords[wordIndex];
        if (capitalizeWords) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        passphrase.push(word);
    }
    
    let result = passphrase.join(separator);
    
    if (includeNumber) {
        result += getCryptoRandomInt(1000);
    }
    
    if (includeSpecial) {
        const specialChars = '!@#$%^&*()-_=+';
        const specialIndex = getCryptoRandomInt(specialChars.length);
        result += specialChars.charAt(specialIndex);
    }
    
    displayResult(result);
    calculateStrength(result);
    estimatePassphraseCrackTime(result, wordCount);
}

// Username generation
function generateUsername() {
    const error = checkElement('error');
    if (error) error.classList.add('hidden');

    const lengthInput = checkElement('username-length');
    const wordCountInput = checkElement('username-word-count');
    const includeNumberInput = checkElement('include-number-username');
    const allLowercaseInput = checkElement('all-lowercase');

    if (!lengthInput || !wordCountInput || !includeNumberInput || !allLowercaseInput) {
        showError('Required input fields are missing.');
        return;
    }

    const targetLength = parseInt(lengthInput.value);
    const wordCount = parseInt(wordCountInput.value);
    const includeNumber = includeNumberInput.checked;
    const allLowercase = allLowercaseInput.checked;
    
    if (!validateInput(targetLength, 1, 100) || !validateInput(wordCount, 1, 50)) {
        showError('Length must be 1-100, word count must be 1-50.');
        return;
    }
    
    let selectedWords = [];
    let currentLength = 0;
    
    for (let i = 0; i < wordCount; i++) {
        const wordIndex = getCryptoRandomInt(commonWords.length);
        const word = commonWords[wordIndex];
        selectedWords.push(word);
        currentLength += word.length;
    }
    
    let username = selectedWords.join('');
    
    if (includeNumber && username.length < targetLength) {
        const numDigits = Math.min(4, targetLength - username.length);
        const maxNum = Math.pow(10, numDigits);
        username += getCryptoRandomInt(maxNum);
    }
    
    if (username.length > targetLength) {
        username = username.substring(0, targetLength);
    }
    
    if (allLowercase) {
        username = username.toLowerCase();
    } else {
        username = selectedWords.map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
        
        if (includeNumber && username.length < targetLength) {
            const numDigits = Math.min(4, targetLength - username.length);
            const maxNum = Math.pow(10, numDigits);
            username += getCryptoRandomInt(maxNum);
        }
        
        if (username.length > targetLength) {
            username = username.substring(0, targetLength);
        }
    }
    
    displayResult(username);
    
    const strengthBar = checkElement('strength-bar-fill');
    const crackTime = checkElement('crack-time');
    if (strengthBar) {
        strengthBar.style.width = '25%';
        strengthBar.style.backgroundColor = '#e53e3e';
    }
    if (crackTime) {
        crackTime.innerText = 'Note: Usernames are not meant to be secure passwords.';
    }
}

// Utility functions
function getRandomChars(charSet, count) {
    if (!charSet || count <= 0) return '';
    if (charSet.length === 0) return '';
    
    const chars = [];
    for (let i = 0; i < count; i++) {
        const index = getCryptoRandomInt(charSet.length);
        chars.push(charSet.charAt(index));
    }
    return chars.join('');
}

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = getCryptoRandomInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function displayResult(value) {
    const result = checkElement('result');
    const output = checkElement('output');
    if (result && output) {
        result.textContent = value;
        output.classList.remove('hidden');
    }
}

function copyToClipboard() {
    const result = checkElement('result');
    if (!result) return;

    const text = result.textContent;
    if (!navigator.clipboard) {
        showError('Clipboard access unavailable (requires HTTPS).');
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => showError('Copied to clipboard!'))
        .catch(() => showError('Failed to copy to clipboard'));
}

function calculateStrength(password) {
    const strengthBar = checkElement('strength-bar-fill');
    const crackTime = checkElement('crack-time');
    
    if (!strengthBar || !crackTime) return;

    if (!zxcvbnLoaded || typeof zxcvbn !== 'function') {
        strengthBar.style.width = '0%';
        crackTime.innerText = 'Strength calculation unavailable';
        return;
    }
    
    const result = zxcvbn(password);
    const percentage = (result.score + 1) * 20;
    
    strengthBar.style.width = `${percentage}%`;
    strengthBar.setAttribute('aria-valuenow', percentage);
    
    const crackTimeSeconds = result.crack_times_seconds.offline_fast_hashing_1e10_per_second;
    
    if (crackTimeSeconds < 60) {
        strengthBar.style.backgroundColor = '#e53e3e'; // Red
    } else if (crackTimeSeconds < 86400) {
        strengthBar.style.backgroundColor = '#ed8936'; // Orange
    } else if (crackTimeSeconds < 604800) {
        strengthBar.style.backgroundColor = '#f6ad55'; // Yellow
    } else if (crackTimeSeconds < 31536000) {
        strengthBar.style.backgroundColor = '#38a169'; // Green
    } else {
        strengthBar.style.backgroundColor = '#2b6cb0'; // Blue
    }
    
    crackTime.innerText = 
        `Approx. crack time: ${result.crack_times_display.offline_fast_hashing_1e10_per_second}`;
}

// Note: This is a simplified estimation; real-world crack times depend on attack specifics
function estimateCrackTime(password, lowercase, uppercase, numbers, special) {
    const crackTime = checkElement('crack-time');
    if (!crackTime) return;

    const charsetSize = 
        (lowercase.length > 0 ? 26 : 0) +
        (uppercase.length > 0 ? 26 : 0) +
        (numbers.length > 0 ? 10 : 0) +
        (special.length > 0 ? special.length : 0);
    
    const combinations = Math.pow(charsetSize, password.length);
    const seconds = combinations / 1e10; // 10 billion guesses per second
    
    let displayTime;
    if (seconds < 60) {
        displayTime = `${Math.round(seconds)} seconds`;
    } else if (seconds < 86400) {
        displayTime = `${Math.round(seconds / 60)} minutes`;
    } else if (seconds < 31536000) {
        displayTime = `${Math.round(seconds / 86400)} days`;
    } else {
        displayTime = `${Math.round(seconds / 31536000)} years`;
    }
    
    crackTime.innerText = `Estimated crack time: ${displayTime}`;
}
// Note: Assumes small dictionary; larger dictionaries increase crack time
function estimatePassphraseCrackTime(passphrase, wordCount) {
    const crackTime = checkElement('crack-time');
    if (!crackTime) return;

    const dictionarySize = commonWords.length;
    let combinations = Math.pow(dictionarySize, wordCount);
    
    if (passphrase.match(/\d+/)) {
        combinations *= 1000; // Account for appended numbers
    }
    if (passphrase.match(/[!@#$%^&*()-_=+]/)) {
        combinations *= 14; // Account for special characters
    }
    
    const seconds = combinations / 1e10;
    
    let displayTime;
    if (seconds < 60) {
        displayTime = `${Math.round(seconds)} seconds`;
    } else if (seconds < 86400) {
        displayTime = `${Math.round(seconds / 60)} minutes`;
    } else if (seconds < 31536000) {
        displayTime = `${Math.round(seconds / 86400)} days`;
    } else {
        displayTime = `${Math.round(seconds / 31536000)} years`;
    }
    
    crackTime.innerText = `Estimated crack time: ${displayTime}`;
}
