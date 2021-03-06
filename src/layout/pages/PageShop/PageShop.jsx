import React, { useState } from 'react';
import { Badge, Button, Container, Modal } from 'react-bootstrap';
import Slider from "react-slick";

import classes from './PageShop.module.scss';

import MyNavbar from '../../components/MyNavbar/MyNavbar';
import CommonSideCards from '../../components/CommonSideCards/CommonSideCards';

const GROUP_ITEMS = [
  {
    title: 'Tăng sức mạnh',
    itemList: [
      {
        imgURL: '//d35aaqx5ub95lt.cloudfront.net/images/icons/streak-freeze.svg',
        title: 'Streak Freeze',
        description: 'Streak Freeze cho phép bạn giữ nguyên streak trong một ngày bạn không có hoạt động nào.',
        price: 10,
      },
      {
        imgURL: '//d35aaqx5ub95lt.cloudfront.net/images/icons/flaming-calendar.svg',
        title: 'Gấp đôi hoặc Mất hết',
        description: 'Nhận được gấp đôi số lingot từ 5 lingot mà bạn bỏ ra nếu bạn giữ được 7 ngày streak.',
        price: 5,
      },
    ]
  },
  {
    title: 'Luyện tập',
    itemList: [
      {
        imgURL: '//d35aaqx5ub95lt.cloudfront.net/images/icons/timed-practice.svg',
        title: 'Luyện tập có tính thời gian',
        description: 'Hãy xem bạn tập luyện các kỹ năng tốt tới đâu với đồng hồ trong Thử thách bấm giờ.',
        price: 15,
      },
    ]
  },
];

const LINGOT_INFO_DETAIL = [
  {
    title: 'Thăng cấp',
    description: `Nhận được <span style="font-weight: bold">1 lingot</span>`
  },
  {
    title: 'Hoàn thành một kỹ năng',
    description: `Nhận được <span style="font-weight: bold">2 lingot</span> khi hoàn tất một kĩ năng `
  },
  {
    title: '10 ngày streak',
    description: `Nhận được <span style="font-weight: bold">1 lingot</span> cho mỗi <span style="font-weight: bold">10 ngày streak</span> (1 cho 10 ngày, 2 cho 20...)`
  },
  {
    title: '',
    description: `<span style="font-style: italic; color: #555;">Ghi chú: Người học sẽ không nhận được Lingot nếu thăng cấp hoặc hoàn tất các kĩ năng nếu dùng bài kiểm tra rút ngắn.</span>`
  },
];


const BILINGUO_PLUS_FEATURES = [
  {
    photoURL: 'https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-drink.svg',
    description: 'Không quảng cáo, không bị gián đoạn'
  },
  {
    photoURL: 'https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-ribbon-jump.svg',
    description: 'Mở khóa những bài kiểm tra vui nhộn'
  },
  {
    photoURL: 'https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-jetpack.svg',
    description: 'Một lần khôi phục streak mỗi tháng'
  },
  {
    photoURL: 'https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-window.svg',
    description: 'Các khóa học ngoại tuyến và hơn thế nữa trên thiết bị di động'
  },
  {
    photoURL: 'https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-parachute.svg',
    description: 'Hỗ trợ giáo dục miễn phí'
  },
]


function PageShop() {
  // const [toggler, setToggler] = useState(false);
  const [isModalShowPreviewPlus, setIsModalShowPreviewPlus] = useState(false);
  const [isModalShowConfirm, setIsModalShowConfirm] = useState(false);

  const renderClouds = (delay, duration, height) => {
    const clouds = [];

    for (let i = 0; i < 15; i++) {
      const randomPercent = Math.floor(Math.random() * 101);
      const randomDurationRange = Math.floor(Math.random() * (20 - -20)) + -20;

      if (i % 2 === 0) {
        clouds.push(
          <div
            className={`${classes['Cloud']} ${classes['Foreground']}`}
            style={{
              animationDelay: delay * i + 's',
              top: randomPercent + '%',
              // animationDuration: (duration - (i * 4)) + 's',
              animationDuration: (duration + randomDurationRange) + 's',
              height: height + (i * 2.5),
            }}
          ></div>
        );
      } else {
        clouds.push(
          <div
            className={`${classes['Cloud']} ${classes['Background']}`}
            style={{
              animationDelay: delay * i + 's',
              top: randomPercent + '%',
              // animationDuration: (duration * 1.25 - (i * 4)) + 's',
              animationDuration: (duration + randomDurationRange) + 's',
              height: (height / 1.5) + (i * 2.5),
            }}
          ></div>
        );
      }
    }

    return clouds;
  }

  const renderGroupItems = () => {
    return GROUP_ITEMS.map(gropuItem => (
      <div className={classes['group-item-section']}>
        <div className={classes['group-item-section-title']}>
          {gropuItem.title}
        </div>
        <div className={classes['group-item-section-content']}>
          {gropuItem.itemList.map(item => (
            <div className={classes['item-section']}>
              <div className="row">
                <div className="col-4 col-md-2">
                  <div className={classes['item-section-image-container']}>
                    <img src={item.imgURL} alt={item.title} />
                  </div>
                </div>
                <div className="col-8 col-md-6">
                  <div className={classes['item-section-detail']}>
                    <div className={classes['title']}>{item.title}</div>
                    <div className={classes['description']}>{item.description}</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    className={classes['item-section-btn-buy']}
                    onClick={() => {setIsModalShowConfirm(true)}}
                  >
                    Mua với giá:
                    <div style={{ color: '#ff4b4b', marginLeft: 10, display: 'flex', alignItems: 'center' }}>
                      <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/lingot.svg" alt="Lingot" style={{ width: 26, height: 30 }} />{item.price}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))
  }

  const renderLingotInfoDetail = () => {
    return LINGOT_INFO_DETAIL.map(detailSection => (
      <div className="row" style={{ marginTop: 5 }}>
        <div className="col-3">
          <div className={classes['detail-title']}>
            {detailSection.title}
          </div>
        </div>
        <div className="col-9">
          <div className={classes['detail-description']} dangerouslySetInnerHTML={{__html: detailSection.description}}></div>
        </div>
      </div>
    ))
  }

  // Modal Preview
  const renderPreviewPlusSlides = () => {
    return BILINGUO_PLUS_FEATURES.map((feature, index) => (
      <div className={classes['slide-container']}>
        <div className={classes['slide-image-container']}>
          <img src={feature.photoURL} alt={feature.description} />
        </div>
        <div className={classes['slide-title']}>Bilinguo <Badge variant="primary" style={{ backgroundColor: '#286ec8', fontSize: 20 }}>PLUS</Badge></div>
        <div className={classes['slide-subtext']}>{feature.description}</div>
      </div>
    ));
  }

  return (
    <div>
      <MyNavbar />
      <Container className={classes['page-content-container']}>
        <div className="row">
          <div className="col-12 col-lg-8">
            {/* Left (Main) Content */}
            <div className={classes['filled-card']}>
              <div className={classes['Clouds']}>
                {renderClouds(4, 60, 20)}
              </div>

              <div className="row">
                <div className="col-12 col-md-10">
                  <div className={classes['card-content-trial']}>
                    <div className={classes['card-content-trial-header']}>
                      <div className="mr-2">Bilinguo</div>
                      <Badge variant="primary" style={{ backgroundColor: '#286ec8', fontSize: 20 }}>PLUS</Badge>
                    </div>
                    <div className={classes['card-content-trial-description']}>Gỡ bỏ quảng cáo, tải các bài học trên thiết bị di động, nhận lần khôi phục streak miễn phí hàng tháng và hỗ trợ sứ mệnh của chúng tôi.</div>
                    <Button variant="secondary" size="lg" style={{ color: '#1cb0f6' }} onClick={() => {setIsModalShowPreviewPlus(true)}}>Thử miễn phí</Button>
                  </div>
                </div>
              </div>

              <img className={`d-none d-md-block ${classes['card-logo']}`} src="https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-shop.svg" />
            </div>

            {renderGroupItems()}

            <div className={classes['panel-lingot-info']}>
              <div className={classes['panel-lingot-info-title']}>
                Lingot là gì? <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/lingot.svg" alt="Lingot"/>
              </div>
              <div className={classes['panel-lingot-info-description']}>
                <span style={{ fontWeight: 'bold', color: '#444' }}>Lingot</span> <span style={{ fontStyle: 'italic' }}>[ling-guht]</span> là tiền tệ ảo của Duolingo. Bạn càng học nhiều trên Duolingo, bạn càng nhận được nhiều lingot và dùng để mua vật phẩm trong cửa hàng! Một số cách nhận được lingot:
              </div>
              <div className={classes['panel-lingot-info-detail']}>
                {renderLingotInfoDetail()}
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-4">
            {/* Right Content */}
            <CommonSideCards />
          </div>
        </div>
      </Container>

      <Modal show={isModalShowPreviewPlus} centered onHide={() => {setIsModalShowPreviewPlus(false)}} className={classes['dialog-preview-plus-container']} dialogClassName={classes['dialog-preview-plus']}>
        
        <div className={classes['Clouds']}>
          {renderClouds(1, 40, 40)}
        </div>
        <Modal.Body>
          <div className={classes['slider-container']}>
            <Slider dots={true} infinite={true} autoplay={true} autoplaySpeed={2500} speed={500} slidesToShow={1} slidesToScroll={1}>
              {renderPreviewPlusSlides()}
            </Slider>
          </div>
          <Button
            variant="secondary"
            size="lg"
            style={{ color: '#1cb0f6', }}
            className={classes['preview-button-yes']}
            onClick={() => {setIsModalShowPreviewPlus(false)}}
          >
            Dùng thử 7 ngày miễn phí
          </Button>
          
          <Button
            variant="outline-secondary"
            size="lg"
            className={classes['preview-button-cancel']}
            onClick={() => {setIsModalShowPreviewPlus(false)}}
          >
            Không, cảm ơn
          </Button>
        </Modal.Body>
      </Modal>

      <Modal show={isModalShowConfirm} centered onHide={() => {setIsModalShowConfirm(false)}} size="md" dialogClassName={classes['dialog-confirm']}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: 'bold' }}>Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Xác nhận mua vật phẩm:</div>
          <div className={classes['item-container']}>
            <div className="row">
              <div className="col-3 d-flex" style={{ paddingRight: 0 }}>
                <div className={classes['item-image-container']}>
                  <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/streak-freeze.svg" alt="Streak Freeze"/>
                </div>
              </div>
              <div className="col-9">
                <div className={classes['item-detail-container']}>
                  <div className={classes['item-title']}>
                    Streak Freeze
                    <span style={{ color: '#ff4b4b', marginLeft: 10, display: 'flex', alignItems: 'center' }}>
                      <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/lingot.svg" alt="Lingot" style={{ width: 26, height: 30 }} />10
                    </span>
                  </div>
                  <div className={classes['item-description']}>Streak Freeze cho phép bạn giữ nguyên streak trong một ngày bạn không có hoạt động nào.</div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setIsModalShowConfirm(false)}}>
            Đóng
          </Button>
          <Button variant="success" onClick={() => {setIsModalShowConfirm(false)}} className={classes['btn-buy']}>
            Mua luôn
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PageShop;