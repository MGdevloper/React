import React, { useEffect } from 'react'

function Topsection() {
    useEffect(() => {
        const smokeBoxs = document.querySelectorAll("#smokeBox");
        const clonecursor = document.querySelector("#clonecursor");

        // get range
        let start = smokeBoxs[0].getBoundingClientRect().x;
        let bottom = smokeBoxs[0].getBoundingClientRect().y + 65;
        let end = smokeBoxs[smokeBoxs.length - 1].getBoundingClientRect().x + 55;

        // place cursor at y
        clonecursor.style.top = bottom + "px";

        // animation state
        let x = start;
        let direction = 1; // 1 → right, -1 → left
        const speed = 2; // px per frame

        function animate() {
            // move cursor
            x += direction * speed;
            if (x <= start || x >= end) {
                direction *= -1;
            }

            // position
            clonecursor.style.left = x + "px";

            // 🔥 fire fake mousemove event
            const fakeEvent = new CustomEvent("fakeMouseMove", {
                detail: { x, y: bottom }
            });
            document.dispatchEvent(fakeEvent);

            requestAnimationFrame(animate);
        }

        animate();

        // particle smoke effect (but now listening to fake event instead of real mousemove)
        smokeBoxs.forEach((smokeBox) => {
            let smokeColor;

            if (smokeBox.querySelector("i").classList.contains("ri-javascript-fill")) {
                smokeColor = "#fde04726";
            } else if (smokeBox.querySelector("i").classList.contains("ri-reactjs-fill")) {
                smokeColor = "lightblue";
            } else if (smokeBox.querySelector("i").classList.contains("ri-tailwind-css-fill")) {
                smokeColor = "lightblue";
            } else if (smokeBox.querySelector("i").classList.contains("ri-html5-fill")) {
                smokeColor = "#ed3d0033";
            }

            smokeBox.addEventListener("mousemove", (e) => {
                
                const particle = document.createElement("div");
                particle.classList.add("smoke-particle");

                const rect = smokeBox.getBoundingClientRect();
                particle.style.left = e.clientX - rect.left - 15 + "px";
                particle.style.top = e.clientY - rect.top - 15 + "px";

                particle.style.background = `radial-gradient(circle, ${smokeColor} 0%, transparent 70%)`
                smokeBox.appendChild(particle);
                setTimeout(() => particle.remove(), 1000);
            });

            document.addEventListener("fakeMouseMove", (e) => {
                const { x, y } = e.detail;
                const rect = smokeBox.getBoundingClientRect();

                // check if fake cursor is inside this smokeBox
                if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                    const particle = document.createElement("div");
                    particle.classList.add("smoke-particle");

                    particle.style.left = x - rect.left - 15 + "px";
                    particle.style.top = y - rect.top - 15 + "px";
                    particle.style.background = `radial-gradient(circle, ${smokeColor} 0%, transparent 70%)`;

                    smokeBox.appendChild(particle);
                    setTimeout(() => particle.remove(), 2000);
                }
            });
        });
    }, []);

    return (
        <div className="flex justify-center items-center w-full h-auto flex-wrap">
            <div
                id="clonecursor"
                className="absolute w-2 h-2 rounded-3xl"
            ></div>

            <div className="rounded-[100px] capitalize font-mono dark:text-white gap-7 lg:gap-10 text-3xl font-semibold flex flex-col max-sm:text-xl max-sm:h-[300px] lg:text-[50px] justify-center items-center w-[100%] max-sm:w-full h-[500px]">
                <div className="font-extrabold max-sm:text-[28px] lg:text-[65px]">Hii,</div>
                <div className="flex-nowrap">
                    My name is manav i like to <span id="code">&lt;</span>code<span id="code">&gt;</span>
                </div>
                <div className="text-gray-600 dark:text-gray-600">i love ❤️ spanlogic building</div>
            </div>

            <div className="flex justify-center gap-4 text-4xl">
                <div id="smokeBox" className="p-3 rounded-lg smoke-container skills z-20 relative">
                    <div className="content relative z-20">
                        <i className="ri-javascript-fill text-yellow-300"></i>
                    </div>
                    <div id="smokeLayer" className="smoke-layer"></div>
                </div>

                <div id="smokeBox" className="p-3 rounded-lg smoke-container skills z-20 relative">
                    <div className="content relative z-20">
                        <i className="ri-reactjs-fill text-[#087ea4]"></i>
                    </div>
                    <div id="smokeLayer" className="smoke-layer"></div>
                </div>

                <div id="smokeBox" className="p-3 rounded-lg smoke-container skills z-20 relative">
                    <div className="content relative z-20">
                        <i className="ri-html5-fill text-[rgb(237,61,0)]"></i>
                    </div>
                    <div id="smokeLayer" className="smoke-layer"></div>
                </div>

                <div id="smokeBox" className="p-3 rounded-lg smoke-container skills z-20 relative">
                    <div className="content relative z-30">
                        <i className="ri-tailwind-css-fill text-[#4acaf4]"></i>
                    </div>
                    <div id="smokeLayer" className="smoke-layer"></div>
                </div>
            </div>
        </div>
    );
}

export default Topsection;
