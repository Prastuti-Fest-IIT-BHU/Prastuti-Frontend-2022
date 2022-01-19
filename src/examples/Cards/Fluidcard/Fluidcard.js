
import './fluidcard.css';
import FacebookIcon from '@mui/icons-material/Facebook';

function DeveloperCard() {

  return(
    <div>
      <div className="background" />
      <div id="curve" className="card">
        <div className="footer">
          <div className="connections">
            <div className="connection facebook">
             < FacebookIcon className="icon"/>
            </div>
            <div className="connection twitter">
              <div className="icon" />
            </div>
            <div className="connection behance">
              <div className="icon" />
            </div>
          </div>
          <svg id="curve">
            <path
              id="p"
              d="M0,200 Q80,100 400,200 V150 H0 V50"
              transform="translate(0 300)"
            />
            <rect
              id="dummyRect"
              x={0}
              y={0}
              height={450}
              width={400}
              fill="transparent"
            />
            <animate
              xlinkHref="#p"
              attributeName="d"
              to="M0,50 Q80,100 400,50 V150 H0 V50"
              fill="freeze"
              begin="dummyRect.mouseover"
              end="dummyRect.mouseout"
              dur="0.1s"
              id="bounce1"
            />
            <animate
              xlinkHref="#p"
              attributeName="d"
              to="M0,50 Q80,0 400,50 V150 H0 V50"
              fill="freeze"
              begin="bounce1.end"
              end="dummyRect.mouseout"
              dur="0.15s"
              id="bounce2"
            />
            <animate
              xlinkHref="#p"
              attributeName="d"
              to="M0,50 Q80,80 400,50 V150 H0 V50"
              fill="freeze"
              begin="bounce2.end"
              end="dummyRect.mouseout"
              dur="0.15s"
              id="bounce3"
            />
            <animate
              xlinkHref="#p"
              attributeName="d"
              to="M0,50 Q80,45 400,50 V150 H0 V50"
              fill="freeze"
              begin="bounce3.end"
              end="dummyRect.mouseout"
              dur="0.1s"
              id="bounce4"
            />
            <animate
              xlinkHref="#p"
              attributeName="d"
              to="M0,50 Q80,50 400,50 V150 H0 V50"
              fill="freeze"
              begin="bounce4.end"
              end="dummyRect.mouseout"
              dur="0.05s"
              id="bounce5"
            />
            <animate
              xlinkHref="#p"
              attributeName="d"
              to="M0,200 Q80,100 400,200 V150 H0 V50"
              fill="freeze"
              begin="dummyRect.mouseout"
              dur="0.15s"
              id="bounceOut"
            />
          </svg>
          <div className="info">
            <div className="name">Vaibhav Singh</div>
            <div className="job">Dead inside</div>
          </div>
        </div>
        <div className="card-blur" />
      </div>

</div>
)  ;
}

export default DeveloperCard;
