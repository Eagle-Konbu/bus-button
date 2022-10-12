import Image from "next/image";
import React from "react";

type Props = {
    isOn: boolean;
}

const Signal = (props: Props) => {
    const imgSrc = (isOn: boolean) => isOn ? "/images/red.svg" : "/images/green.svg";

    return (
        <Image src={imgSrc(props.isOn)} alt="Signal" width={300} height={300} />
    );
};

export default Signal;