import PropsType from "./PropsType";

function Footer( props: PropsType){
      return (
        <div className="footer">
          {props.name}
        </div>
      )
    }
export default Footer;