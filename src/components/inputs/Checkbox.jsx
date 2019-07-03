import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CheckStyle = styled.div`
  .ctx {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.2s ease;
    &:not(:last-child) {
      margin-right: 6px;
    }
    &:hover {
      background-color: rgba(#563eb3, 0.09);
    }
    span {
      float: left;
      vertical-align: middle;
      transform: translate3d(0, 0, 0);
      &:first-child {
        position: relative;
        width: 18px;
        height: 18px;
        border-radius: 4px;
        transform: scale(1);
        border: 2px solid #c8ccd4;
        transition: all 0.2s ease;
        svg {
          position: absolute;
          top: 4px;
          left: 3px;
          fill: none;
          stroke: #fff;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 16px;
          stroke-dashoffset: 16px;
          transition: all 0.3s ease;
          transition-delay: 0.1s;
          transform: translate3d(0, 0, 0);
        }
      }
      &:last-child {
        padding-left: 8px;
        /* line-height: 18px; */
      }
    }
    &:hover span:first-child {
      border-color: #563eb3;
    }
  }

  .inp-box:checked + .ctx {
    span {
      &:first-child {
        background: #563eb3;
        border-color: #563eb3;
        animation: wave 0.4s ease;
        svg {
          stroke-dashoffset: 0;
        }
      }
    }
  }

  label {
    display: flex;
    align-items: center;
  }

  @keyframes wave {
    50% {
      transform: scale(0.8);
    }
  }
`;

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label, value } = this.props;
    if (!handleCheckboxChange) return;
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(label, value);
  };

  render() {
    const { label, id } = this.props;
    const { isChecked } = this.state;

    return (
      <CheckStyle>
        <input
          id={id}
          type="checkbox"
          className="inp-box"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
          style={{ display: "none" }}
        />
        <label htmlFor={id} className="ctx">
          <span>
            <svg width="12px" height="12px">
              <use xlinkHref={`#${id}-check-svg`}>
                <symbol id={`${id}-check-svg`} viewBox="0 0 12 12">
                  <polyline points="1.5 6 4.5 9 10.5 1" />
                </symbol>
              </use>
            </svg>
          </span>
          <span>{label}</span>
        </label>
      </CheckStyle>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};

export default Checkbox;

// export const Checkbox1 = () => {
//   return (
//     <CheckStyle>
//       <input
//         type="checkbox"
//         id="afternoon"
//         class="inp-box"
//         style={{ display: "none" }}
//       />
//       <label for="afternoon" class="ctx">
//         <span>
//           <svg width="12px" height="10px">
//             <use xlinkHref="#check">
//               <symbol id="check" viewBox="0 0 12 10">
//                 <polyline points="1.5 6 4.5 9 10.5 1" />
//               </symbol>
//             </use>
//           </svg>
//         </span>
//         <span>Afternoon</span>
//       </label>
//     </CheckStyle>
//   );
// };
