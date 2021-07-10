import React from "react";

class About extends React.Component<{}, {}>{
    constructor(props: any) {
        super(props);
    }
    render(){
        console.log('render about');
        return(
            <div>
                This is about 123456
            </div>
        );

    }
}

export default About;