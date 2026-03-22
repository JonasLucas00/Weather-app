function headBG(condition){
        const defaultGradient = "linear-gradient(135deg, #1d4ed8, #0ea5e9)";

        const gradients = {
            Clear:        "linear-gradient(135deg, #1d4ed8, #0ea5e9, #38bdf8)",
            Clouds:       "linear-gradient(135deg, #475569, #64748b, #94a3b8)",
            Rain:         "linear-gradient(135deg, #1e3a5f, #1e40af, #334155)",
            Drizzle:      "linear-gradient(135deg, #1e3a5f, #2563eb, #475569)",
            Thunderstorm: "linear-gradient(135deg, #1a1a2e, #312e81, #1e3a5f)",
            Snow:         "linear-gradient(135deg, #b0c4de, #dbeafe, #e0f2fe)",
            Mist:         "linear-gradient(135deg, #78909c, #90a4ae, #b0bec5)",
            Fog:          "linear-gradient(135deg, #78909c, #90a4ae, #b0bec5)",
            Haze:         "linear-gradient(135deg, #92400e, #b45309, #d97706)",
        };
        // console.log(gradients[condition])
        // console.log(condition)
        return gradients[condition] || defaultGradient
}

export default headBG
