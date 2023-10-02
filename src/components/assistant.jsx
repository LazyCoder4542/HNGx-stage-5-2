import { useAssistant } from "./assistantContext";
import styles from "./assistant.module.sass"
import img from "./../assets/pngaaa.com-3319490.png"
function Assistant() {
  const {content, position, clearAssistant} = useAssistant()
  return (
    <div
    className={styles.assistant}
    style={{
      top: position.y,
      left: position.x
    }}
    >
      <div className={styles.robot}>
        <img src={img} alt="" />
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Assistant;