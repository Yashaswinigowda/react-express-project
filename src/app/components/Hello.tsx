import * as React from 'react';
import "../css/style.scss";


interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}
export class Hello extends React.Component<IProps, {}> {
   render() {
   return <div> This is a {this.props.framework} application using    {this.props.compiler} with {this.props.bundler}</div>
   }
}