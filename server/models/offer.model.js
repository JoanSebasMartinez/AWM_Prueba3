const mongoose = require('mongoose');

const validJobs = ["Frontend developer", "Backend developer", "DevOps", "Fullstack developer"];
const validLanguage = ["CSS","JS"];

const UserSchema = new mongoose.Schema({
    job: {
        type: String,
        required: [true, "Job is required"],
        validate: {
            validator: function(value) {
                return validJobs.includes(value);
            },
            message: props => `${props.value} is not a valid job. Allowed jobs are: ${validJobs.join(", ")}.`
        }
    },
    language: {
        type: String,
        required: 'Language is required',
        validate: {
            validator: function(value) {
                return validLanguage.includes(value);
            },
            message: props => `${props.value} is not a valid language. Allowed languages are: ${validLanguage.join(", ")}.`
        }
    },
    salary: {
        type: Number,
        required: [true, "Salary is required"]
    }
});

UserSchema.index({ job: 1, language: 1, salary: 1 }, { unique: true });

const Offer = mongoose.model('Offer', UserSchema);
module.exports = Offer;
