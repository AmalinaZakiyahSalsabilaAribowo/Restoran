import React, {Component} from "react";
class Modal extends Component {
  render(){
    return(
      <div className="modal fade" id={this.props.id}>
      <div className= "modal-dialog modal-lg">
      <div className= "modal-content">
      <div className={ "modal-header bg-"}>
      this.props.bg_header}>
      <h4 className={ "text-"+ this.props.text_header}>
      </h4>
      </div>
      <div className="modal-body">
      {this.props.childern}
      </div>
    </div>
  </div>
</div>
);
  }
}
export default Modal;
