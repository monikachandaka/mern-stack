import React from "react";
import { Component } from "react";

class ClassBasedComponent extends Component {
    render() {
        return (
            <>
                <p>
                    <h1>class based</h1>
                    this is a class based component
                </p>
                <h3>Addition of 10 and 20:{10+20}

                </h3>

            </>
        );
    }
}
export default ClassBasedComponent;