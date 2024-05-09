/* eslint-disable react/prop-types */
import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <div id="button">
            <button className="close" type="button" onClick={props.onClose}>
              &#x2715;
            </button>
          </div>
        </section>
      </div>
    );
  }
}
