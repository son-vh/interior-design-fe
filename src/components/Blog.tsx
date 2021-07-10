import React from "react";

class Blog extends React.Component<{}, {}>{
    constructor(props: any) {
        super(props);
    }
    render(){
        console.log('render blog');
        return(
            <div>
                This is blog
            </div>
        );

    }
}

export default Blog;