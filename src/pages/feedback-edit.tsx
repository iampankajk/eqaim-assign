import styles from '../styles/feedback_edit.module.scss'

const FeedbackEdit = ()=>{

    return(
    <div className={styles.tabletEditFeedback}>
      <div className={styles.rectangleCopy3Parent}>
        <div className={styles.rectangleCopy3} />
        <div className={styles.goBackParent}>
          <b className={styles.goBack}>Go Back</b>
          <img className={styles.path2Icon2} alt="" src="/left-arrow.svg" />
        </div>
        <b className={styles.editingAddA}>Editing ‘Add a dark theme option’</b>
        <img className={styles.frameChild} alt="" src="/group-4.svg" />
        <div className={styles.groupParent}>
          <div className={styles.groupGroup}>
          <div className={styles.feedbackTitleParent}>
              <b className={styles.feedbackTitle}>Feedback Title</b>
              <div className={styles.addAShort}>
                Add a short, descriptive headline
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.rectangle} />
              <input className={styles.addADark} placeholder='Add a dark theme option'></input>
            </div>
          </div>
          <div className={styles.group3Copy2}>
          <div className={styles.feedbackDetailParent}>
              <b className={styles.feedbackTitle}>Feedback Detail</b>
              <div className={styles.addAShort}>
                Include any specific comments on what should be improved, added,
                etc.
              </div>
            </div>
            <div className={styles.group1}>
              <div className={styles.rectangle} />
              <div className={styles.itWouldHelp}>
                It would help people like me with light sensitivities.
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle2} />
            <b className={styles.saveChanges}>Save Changes</b>
          </div>
          <div className={styles.group14Copy}>
            <div className={styles.rectangle3} />
            <b className={styles.cancel}>Cancel</b>
          </div>
          <div className={styles.group14Copy2}>
            <div className={styles.rectangle4} />
            <b className={styles.cancel}>Delete</b>
          </div>
          <div className={styles.group3Copy}>
            <div className={styles.group}>
              <div className={styles.rectangle} />
              <div className={styles.addADark}>Feature</div>
              <img className={styles.path2Icon} alt="" src="/down-arrow.svg" />
            </div>
            <div className={styles.categoryParent}>
              <b className={styles.feedbackTitle}>Category</b>
              <div className={styles.addAShort}>
                Choose a category for your feedback
              </div>
            </div>
          </div>
          <div className={styles.group3Copy3}>
          <div className={styles.updateStatusParent}>
              <b className={styles.feedbackTitle}>Update Status</b>
              <div className={styles.addAShort}>Change feature state</div>
            </div>
            <div className={styles.group}>
              <div className={styles.rectangle} />
              <div className={styles.addADark}>Planned</div>
              <img className={styles.path2Icon} alt="" src="/down-arrow.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default FeedbackEdit;