import React, {useEffect} from "react";
import Navbar from "../../components/navbar/navbar";
import {Avatar, Card, CardActionArea, CardContent, Typography} from "@material-ui/core";
import {useLazyQuery} from "@apollo/client";
import {GET_EVENT_BY_ID} from "../../apollo/queries/event-queries";
import {Link} from "react-router-dom";
import PreLoader from "../../components/preloader/preloader";

const EventDetail = (props) => {
  const [getEventDetail, {loading, data, error}] = useLazyQuery(GET_EVENT_BY_ID);

  useEffect(() => {
    getEventDetail({
      variables: {
        id: props.match.params.id
      }
    })
  }, [])

  return (
    <>
      <Navbar/>
      {loading && (
        <div>
          <PreLoader/>
        </div>
      )}
      {
        data && data.eventById && (
          <div className="py-5 mt-5 container-md">
            <Card>
              <CardActionArea>
                <div className="all-event-cont w-100 overflow-hidden position-relative">
                  <div className="all-event position-absolute">
                    <img
                      src={data.eventById.photos[0]}
                      alt="business_picture"
                      className="all-event-pic-back"
                    />
                  </div>
                  <div className="all-event position-absolute">
                    <img
                      src={data.eventById.photos[0]}
                      alt="business_picture"
                      className="all-event-pic"
                    />
                  </div>
                </div>
              </CardActionArea>
              <CardContent className="pb-0">
                <div className="d-flex overflow-hidden">
                  <Avatar src={data.eventById.photos[0]}/>
                  <div className="flex-fill">
                    <p className="px-3 pr-5 w-100 mb-0 fw-bold fs-6 d-block text-truncate">{data.eventById.title}</p>
                    <Typography variant="caption" className="px-3 pr-5 mb-2 d-block text-truncate">
                      {data.eventById.location}
                    </Typography>
                    <Typography variant="body1" className="px-3 pr-5 mb-2 d-block text-truncate">
                      <a target="_blank" href={data.eventById.link}>{data.eventById.link}</a>
                    </Typography>
                  </div>
                </div>
                <div className="px-3 py-2">
                  {data.eventById.description}
                </div>
                <div className="px-3 pb-2 font-italic">
                  Start {data.eventById.startDate.split("T")[0]} - End {data.eventById.endDate.split("T")[0]}
                </div>
                <div className="w-100 text-right py-1">
                  <h5><Link to={`/detail/${data.eventById.owner._id}`}>
                    {data.eventById.owner.businessName}
                  </Link></h5>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      }
    </>
  )
}

export default EventDetail;