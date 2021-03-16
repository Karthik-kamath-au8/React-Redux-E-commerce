import React from 'react'
import SimpleReactFooter from "simple-react-footer";


const Footer =() => {
  const description = "";
  const title = "DIGI-Mart";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                // link: "#"
            },
            {
                name: "Careers",
                // link: "#"
            },
            {
                name: "Contact",
                // link: "#"
            },
    
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                // link: "#"
            },
            {
                name: "Terms",
                // link: "#"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                // link: "#"
            },
            {
                name: "Culture",
                // link: "#"
            }
        ]
    }
 ];
 return <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="DIGI_Mart"
    iconColor="black"
    backgroundColor="#822659"
    fontColor="black"
    copyrightColor="darkgrey"
    className="Footer"
 />;
};
export default Footer;
