// import React from "react";
const Service = ({ serviceImg, serviceName, description }) => {
    return (
        <div className="rounded-[30px] flex flex-col items-center w-[230px] h-[250px] shadow-xl px-6 py-8 bg-white gap-4">
            <img src={serviceImg} alt={serviceName} />
            <h3 className="text-lg text-[#5FE26C] font-semibold ">
                {serviceName}
            </h3>
            <p
                className="text-[1.1rem] leading-1 text-[#90BD95] text-center"
                style={{ lineHeight: "19px" }}
            >
                {description}
            </p>
        </div>
    );
};

export default Service;
