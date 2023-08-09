import { FunctionComponent } from "react";
import styles from '../styles/feedback_new.module.scss'
const TabletNewFeedback: FunctionComponent = () => {
  return (
    <div className={styles.tabletNewFeedback}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleCopy3Parent}>
          <div className={styles.rectangleCopy3} />
          <div className={styles.groupParent}>
            <div className={styles.group}>
              <div className={styles.rectangle} />
            </div>
            <div className={styles.feedbackTitleParent}>
              <b className={styles.feedbackTitle}>Feedback Title</b>
              <div className={styles.addAShort}>
                Add a short, descriptive headline
              </div>
            </div>
          </div>
          <div className={styles.group3Copy2}>
            <div className={styles.group1}>
              <div className={styles.rectangle} />
            </div>
            <div className={styles.feedbackDetailParent}>
              <b className={styles.feedbackTitle}>Feedback Detail</b>
              <div className={styles.addAShort}>
                Include any specific comments on what should be improved, added,
                etc.
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle2} />
            <b className={styles.addFeedback}>Add Feedback</b>
          </div>
          <div className={styles.group14Copy}>
            <div className={styles.rectangle3} />
            <b className={styles.cancel}>Cancel</b>
          </div>
          <div className={styles.group3Copy}>
            <div className={styles.group2}>
              <div className={styles.rectangle} />
              <div className={styles.feature}>Feature</div>
              <img className={styles.path2Icon} alt="" src="/down-arrow.svg" />
            </div>
            <div className={styles.categoryParent}>
              <b className={styles.feedbackTitle}>Category</b>
              <div className={styles.addAShort}>
                Choose a category for your feedback
              </div>
            </div>
          </div>
          <b className={styles.createNewFeedback}>Create New Feedback</b>
          <img className={styles.frameChild} alt="" src="/group-4.svg" />
        </div>
        <div className={styles.goBackParent}>
          <b className={styles.goBack}>Go Back</b>
          <img className={styles.path2Icon1} alt="" src="/left-arrow.svg" />
        </div>
      </div>
    </div>
  );
};

export default TabletNewFeedback;
