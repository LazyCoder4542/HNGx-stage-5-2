import { useAssistant } from "./assistantContext";
import styles from "./assistant.module.sass"
import img from "./../assets/pngaaa.com-3319490.png"
import img1 from "./../assets/robot_2-removebg-preview.png"
import img2 from "./../assets/robot1-removebg-preview.png"
function Assistant() {
  const {content, position, clearAssistant} = useAssistant()
  console.log(content);
  return (
    <div
    className={styles.assistant}
    style={{
      top: position.y,
      left: position.x,
      transform: content ? null : "translate(-100%, -100%)"
    }}
    >
      {
        !content ?
        <div className={styles.idle}>
          <img src={img2} alt="" />
        </div> :
        <div className={styles.box}>
          <div className={styles.robot}>
            <img src={img1} alt="" />
          </div>
          <div className={styles.content}>{content}</div>
        </div>
      }
    </div>
  );
}

export default Assistant;