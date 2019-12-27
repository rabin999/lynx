import mongoose from "mongoose"

const dashboardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("dashboard", dashboardSchema)
