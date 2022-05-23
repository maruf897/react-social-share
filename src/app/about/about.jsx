import React from "react";
import ContentShare from "../../components/content-share/ContentShare";
import MetaDecorator from "../../components/MetaDecorator";
import Image from "../home/static/image/image.jpg"
export default function About() {
	let userIdShare = window.location.href;
	return <div>
            <MetaDecorator description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" imageUrl={Image} imageAlt="home image" title="About Page" />
		
		About pagess
		<ContentShare url={userIdShare}/></div>;
}
