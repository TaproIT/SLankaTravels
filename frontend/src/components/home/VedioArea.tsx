import { useState } from "react";
import VideoPopup from "../../modals/VideoPopup";

 

const VedioArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

	return (
		<>
			<section
				className="tr_video text-center wow fadeInUp"
				style={{ backgroundImage: "url(/assets/img/bg/video.jpg)" }}
			>
				<a
					onClick={() => setIsVideoOpen(true)}
          style={{ cursor: "pointer" }}
					className="video_btn"
				>
					<i className="ph ph-play"></i>
				</a>
				<div className="trv_title">
					<h1>Travel</h1>
				</div>
			</section>

            {/* video modal start */}
            <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"-hTVNidxg2s"}
      />
      {/* video modal end  */}
		</>
	);
};

export default VedioArea;
