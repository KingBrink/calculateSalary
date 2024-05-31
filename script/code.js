document.addEventListener('DOMContentLoaded', function () {
    var workingSelect = document.getElementById('working');
    var salaryDiv = document.getElementById('salaryDiv');
    var calculateButton = document.getElementById('calculateButton');
    var submitButton = document.getElementById('submitButton');
    var clearButton = document.getElementById('clearButton');

    workingSelect.addEventListener('change', function () {
        if (workingSelect.value === 'yes') {
            salaryDiv.style.display = 'block';
        } else {
            salaryDiv.style.display = 'none';
        }
    });

    calculateButton.addEventListener('click', calculateSalary);
    submitButton.addEventListener('click', validateForm);
    clearButton.addEventListener('click', clearForm);
});

function calculateSalary() {
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value.trim());
    var hoursWorked = parseFloat(document.getElementById('hoursWorked').value.trim());

    if (!isNaN(hourlyRate) && !isNaN(hoursWorked)) {
        var salary = hourlyRate * hoursWorked * 30; // Assuming a month has 30 working days

        document.getElementById('salaryOutput').innerText = 'Your salary for the month is $' + salary.toFixed(2);
    } else {
        document.getElementById('salaryOutput').innerText = 'Please enter valid hourly rate and hours worked.';
    }
}

function validateForm() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var age = document.getElementById('age').value.trim();
    var dob = document.getElementById('dob').value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var greetingType = document.getElementById('greetingType').value;
    var subjects = document.querySelectorAll('input[name="subjects"]:checked');
    var working = document.getElementById('working').value;

    var isValid = true;
    var errorMessage = '';

    if (firstName === '') {
        isValid = false;
        errorMessage += 'First Name is required. ';
    }

    if (lastName === '') {
        isValid = false;
        errorMessage += 'Last Name is required. ';
    }

    if (age === '') {
        isValid = false;
        errorMessage += 'Age is required. ';
    } else if (parseInt(age) < 0) {
        isValid = false;
        errorMessage += 'Age must be a positive number. ';
    }

    if (dob === '') {
        isValid = false;
        errorMessage += 'Date of Birth is required. ';
    }

    if (!gender) {
        isValid = false;
        errorMessage += 'Gender is required. ';
    }

    if (greetingType === '') {
        isValid = false;
        errorMessage += 'Greeting Type is required. ';
    }

    if (subjects.length === 0) {
        isValid = false;
        errorMessage += 'At least one subject must be selected. ';
    }

    if (working === 'yes') {
        var hourlyRate = document.getElementById('hourlyRate').value.trim();
        var hoursWorked = document.getElementById('hoursWorked').value.trim();

        if (hourlyRate === '') {
            isValid = false;
            errorMessage += 'Hourly Rate is required. ';
        } else if (parseFloat(hourlyRate) <= 0) {
            isValid = false;
            errorMessage += 'Hourly Rate must be a positive number. ';
        }

        if (hoursWorked === '') {
            isValid = false;
            errorMessage += 'Hours Worked is required. ';
        } else if (parseFloat(hoursWorked) <= 0) {
            isValid = false;
            errorMessage += 'Hours Worked must be a positive number. ';
        }
    }

    var errorMessageDiv = document.getElementById('errorMessage');
    errorMessageDiv.innerText = errorMessage;
    if (errorMessage === '') {
        errorMessageDiv.style.display = 'none';
    } else {
        errorMessageDiv.style.display = 'block';
    }

    if (isValid) {
        alert('Form submitted successfully.');
        clearForm();
    }
}

function clearForm() {
    document.getElementById('userForm').reset();
    document.getElementById('salaryDiv').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
}
