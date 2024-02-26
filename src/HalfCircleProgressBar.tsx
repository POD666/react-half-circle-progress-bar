import React from "react";

interface Props {
    progress: number;
    target?: number;
    text: string;
}
  
export const HalfCircleProgressBar = ({ progress, target = 100, text }: Props) => {
    const radius = 150;
    const stroke = 25;
    const percentage = (progress / target / 2) * 100;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
    <>
        <svg
            height={radius * 2}
            width={radius * 2}
            style={{ transform: "rotate(-180deg)" }}
        >
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: "lightgreen", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "green", stopOpacity: 1}} />
                </linearGradient>
            </defs>
            <circle
                stroke="lightgrey"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset: circumference/2, transformOrigin: "center" }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeLinecap="round"
            />
            <circle
                stroke="url(#gradient)"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset, transformOrigin: "center" }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeLinecap="round"
            />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                strokeWidth="2px"
                dy=".3em"
                style={{ transform: "rotate(180deg)", transformOrigin: "center" }}
            >
                { text }
            </text>
        </svg>
    </>
);
};
