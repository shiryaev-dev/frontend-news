import React, { Component } from 'react';

interface IErrorBoundaryProps {
    children?: any;
  }
  
  interface IErrorBoundaryState {
    hasError: boolean;
  }

export default class ErrorBoundry extends Component<IErrorBoundaryProps, IErrorBoundaryState> {

    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <div>Что-то пошло не так.</div>
        }
        return this.props.children
    }
}