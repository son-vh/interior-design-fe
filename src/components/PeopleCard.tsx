import React from "react";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

type mProps = {
    person: { id: number, url: string, name: string, company: string, description: string }

}

type mState = {
   
}

class PeopleCard extends React.Component<mProps, mState>{
    constructor(props: any) {
        super(props);
        
    }


    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.person.url} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.person.name}</CardTitle>
                        <CardSubtitle>{this.props.person.company}</CardSubtitle>
                        <CardText>{this.props.person.description}</CardText>
                        {/* <Button color="danger" onClick={() => this.props.removePerson(id)}>Delete</Button> */}
                    </CardBody>
                </Card>
            </div>
        )

    }
}

export default PeopleCard;