import React from "react";
import ContentShare from "../../components/content-share/ContentShare";
import MetaDecorator from "../../components/MetaDecorator";
import Image from "../home/static/image/image.jpg"
import aboutImg from "./shadhin-labs.png"
export default function About() {
	let userIdShare = window.location.href;
	return <div>
            <MetaDecorator description="This is about page description"
			 imageUrl={aboutImg} imageAlt="about image" title="About Page" />
		<img src={aboutImg}/>
		<img src={Image}/>
		About pagess
		<ContentShare url={userIdShare}/></div>;
}
