const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.chat = async (req, res) => {
    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ message: "Message is required" });
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-flash-latest",
            systemInstruction: "You are an AI assistant for Next Revolution Tech (NRT), a software development agency. Your goal is to help visitors understand our services (Custom Software, SaaS, AI, Cloud, DevOps), provide pricing info (generally needs a consultation), and encourage them to book a free strategy call. Be professional, helpful, and concise. If you don't know something about NRT, suggest they contact support@nextrevolutiontech.tech."
        });

        const chat = model.startChat({
            history: history || [],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.json({ text });
    } catch (error) {
        console.error("--- Gemini AI Error Details ---");
        console.error("Error Message:", error.message);
        console.error("Error Stack:", error.stack);
        res.status(500).json({ message: "AI Service is currently unavailable", error: error.message });
    }
};
