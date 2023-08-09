import styles from '../styles/feedback_detail.module.scss'

const FeedbackDetail = ()=>{
    return(
        <div className={styles.tabletFeedbackDetail}>
        <div className={styles.frameGroup}>
          <div className={styles.goBackParent}>
            <b className={styles.goBack}>Go Back</b>
            <img className={styles.path2Icon1} alt="" src="/left-arrow.svg" />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangle5} />
            <b className={styles.editFeedback}>Edit Feedback</b>
          </div>
        </div>
        <div className={styles.group7Copy}>
          <div className={styles.rectangle} />
          <div className={styles.group}>
            <div className={styles.pathParent}>
              <img className={styles.pathIcon} alt="" src="/chat-icon.svg" />
              <b className={styles.b}>4</b>
            </div>
            <b className={styles.addADark}>Add a dark theme option</b>
            <div className={styles.itWouldHelp}>
              It would help people like me with light sensitivities.
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle1} />
              <b className={styles.b1}>99</b>
              <img className={styles.path2Icon} alt="" src="/up-arrow.svg" />
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangle2} />
              <div className={styles.feature}>Feature</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangle3} />
          {}
          <div className={styles.frameParent}>
            <div className={styles.jamesSkinnerParent}>
              <b className={styles.jamesSkinner}>James Skinner</b>
              <div className={styles.hexagonbestagon}>@hummingbird1</div>
            </div>
            <img className={styles.ovalIcon} alt="" src="/oval@2x.png" />
            <div className={styles.reply}>Reply</div>
            <div className={styles.secondThisI}>
              Second this! I do a lot of late night coding and reading. Adding a
              dark theme can be great for preventing eye strain and the headaches
              that result. It’s also quite a trend with modern apps and apparently
              saves battery life.
            </div>

            <div className={styles.anneValentineParent}>
              <b className={styles.jamesSkinner}>{`Anne Valentine `}</b>
              <div className={styles.hexagonbestagon}>@annev1990</div>
            </div>
            <img className={styles.ovalIcon1} alt="" src="/oval1@2x.png" />
            <div className={styles.reply1}>Reply</div>
            <div className={styles.hummingbird1While}>
              <b>@hummingbird1</b>
              <span className={styles.whileWaitingFor}>
                {" "}
                While waiting for dark mode, there are browser extensions that
                will also do the job. Search for "dark theme” followed by your
                browser. There might be a need to turn off the extension for sites
                with naturally black backgrounds though.
              </span>
            </div>

            <div className={styles.ryanWellesParent}>
              <b className={styles.jamesSkinner}>Ryan Welles</b>
              <div className={styles.hexagonbestagon}>@voyager.344</div>
            </div>
            <img className={styles.ovalIcon2} alt="" src="/oval2@2x.png" />
            <div className={styles.reply2}>Reply</div>
            <div className={styles.annev1990GoodPoinContainer}>
              <b>@annev1990</b>
              <span className={styles.whileWaitingFor}>
                {" "}
                Good point! Using any kind of style extension is great and can be
                highly customizable, like the ability to change contrast and
                brightness. I'd prefer not to use one of such extensions, however,
                for security and privacy reasons.
              </span>
            </div>
            <div className={styles.rectangle4} />
          </div>
          <div className={styles.rectangleCopy2} />

          <div className={styles.group7Copy1}>
            <div className={styles.elijahMossParent}>
              <b className={styles.jamesSkinner}>Elijah Moss</b>
              <div className={styles.hexagonbestagon}>@hexagon.bestagon</div>
            </div>
            <img className={styles.ovalIcon3} alt="" src="/oval3@2x.png" />
            <div className={styles.reply3}>Reply</div>
            <div className={styles.alsoPleaseAllow}>
              Also, please allow styles to be applied based on system preferences.
              I would love to be able to browse Eqaim in the evening after my
              device’s dark mode turns on without the bright background it
              currently has.
            </div>
          </div>
          <b className={styles.comments}>4 Comments</b>
        </div>
        
        <div className={styles.rectangleCopy3} />
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangle6} />
          <div className={styles.typeYourComment}>Type your comment here</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.rectangle7} />
          <b className={styles.editFeedback}>Post Comment</b>
        </div>
        <b className={styles.addComment}>Add Comment</b>
        <div className={styles.charactersLeft}>250 Characters left</div>
      </div>
    )
}

export default FeedbackDetail;