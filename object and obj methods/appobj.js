// Creating an object
let person = {
    name: 'John Doe',
    job: 'Software Developer',
    displayInfo: function() {
        document.getElementById('personName').textContent = this.name;
        document.getElementById('personJob').textContent = 'Job: ' + this.job;
    },
    updateJob: function(newJob) {
        this.job = newJob;
        this.displayInfo();
    }
};

// Displaying initial info
person.displayInfo();

// Function to update the job
function updateJob() {
    let newJob = prompt('Enter new job:');
    if (newJob) {
        person.updateJob(newJob);
    }
}