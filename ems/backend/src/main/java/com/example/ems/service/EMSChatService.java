package com.example.ems.service;

import org.springframework.stereotype.Service;

@Service
public class EMSChatService {

    public String process(String message) {

        if (message == null || message.trim().isEmpty()) {
            return "I didn't receive your message.";
        }

        message = message.toLowerCase().trim();

        // ===== GREETING =====
        if (message.contains("hi") || message.contains("hello")) {
            return "🤖 Hi! Ask me about employees, salaries, attendance, or departments.";
        }

        // ===== EMPLOYEE DETAILS =====
        if (message.contains("emp details") || message.contains("employee details")) {
            return "You can ask:\n" +
                    "• salary of <name>\n" +
                    "• attendance of <name>\n" +
                    "• performance of <name>\n" +
                    "• department of <name>\n" +
                    "• contact of <name>";
        }

        // ===== DEPARTMENT OF EMPLOYEE =====
        if (message.contains("department of")) {
            String name = message.replace("department of", "").trim();

            if (name.equals("anand")) return "🏢 Anand belongs to IT Department.";
            if (name.equals("prem")) return "🏢 Prem belongs to Finance Department.";
            if (name.equals("priya")) return "🏢 Priya belongs to HR Department.";

            return "❌ Employee not found: " + name;
        }

        // ===== ATTENDANCE =====
        if (message.contains("attendance of")) {
            String name = message.replace("attendance of", "").trim();

            if (name.equals("anand"))
                return "📊 Anand: 28 Presents, 2 Leaves.";
            if (name.equals("prem"))
                return "📊 Prem: 26 Presents, 4 Leaves.";
            if (name.equals("priya"))
                return "📊 Priya: 29 Presents, 1 Leave.";

            return "❌ No attendance data found for: " + name;
        }

        // ===== PERFORMANCE PREDICTION =====
        if (message.contains("performance of") || message.contains("prediction")) {
            String name = message.replace("performance of", "")
                                  .replace("prediction", "")
                                  .trim();

            if (name.equals("anand"))
                return "📈 Prediction: Anand’s performance is likely to improve next month.";
            if (name.equals("prem"))
                return "📈 Prediction: Prem may need improvement.";
            if (name.equals("priya"))
                return "📈 Prediction: Priya will maintain high performance.";

            return "❌ No prediction available for: " + name;
        }

        // ===== CONTACT DETAILS =====
        if (message.contains("contact of") || message.contains("phone of") || message.contains("email of")) {
            String name = message.replace("contact of", "")
                                  .replace("phone of", "")
                                  .replace("email of", "")
                                  .trim();

            if (name.equals("anand"))
                return "📞 Anand: 9876543210, 📧 anand@gmail.com";
            if (name.equals("prem"))
                return "📞 Prem: 9123456789, 📧 prem@gmail.com";
            if (name.equals("priya"))
                return "📞 Priya: 9988776655, 📧 priya@gmail.com";

            return "❌ No contact details found for: " + name;
        }

        // ===== SALARY QUERIES =====
        if (message.contains("salary of")) {
            String name = message.replace("salary of", "").trim();

            if (name.equals("anand")) return "💰 Anand's salary is ₹30,000.";
            if (name.equals("prem")) return "💰 Prem's salary is ₹31,000.";
            if (name.equals("bhavani sankar")) return "💰 Bhavani Sankar's salary is ₹35,000.";
            if (name.equals("priya")) return "💰 Priya's salary is ₹40,000.";

            return "❌ No employee found with name: " + name;
        }

        // ===== HIGHEST SALARY =====
        if (message.contains("highest salary")) {
            return "🏆 Highest Salary: ₹1,00,000 (Jagadish).";
        }

        // ===== LOWEST SALARY =====
        if (message.contains("lowest salary")) {
            return "📉 Lowest Salary: ₹25,000 (Divya).";
        }

        // ===== AVERAGE SALARY =====
        if (message.contains("average salary") || message.contains("avg salary")) {
            return "📊 Average Salary of all employees: ₹42,500.";
        }

        // ===== TOTAL EMPLOYEES / DEPARTMENTS =====
        if (message.contains("total employees")) {
            return "👥 There are 32 employees in the company.";
        }

        if (message.contains("total departments")) {
            return "🏢 There are 5 departments: IT, HR, Finance, Marketing, Operations.";
        }

        // ===== DEFAULT =====
        return "Sorry, I didn't understand that.\nTry asking like:\n" +
                "• salary of Anand\n" +
                "• attendance of Prem\n" +
                "• highest salary\n" +
                "• lowest salary\n" +
                "• avg salary\n" +
                "• contact of Priya";
    }
}
