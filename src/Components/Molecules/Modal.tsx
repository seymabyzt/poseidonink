import styles from './modal.module.scss'

interface ModalProps {
    isModalOpen: boolean;
    onClose: () => void;
}

const Modal = ({ isModalOpen, onClose }: ModalProps) => {
    if (!isModalOpen) return null;
    return (
        <>
            <div className="modal-backdrop fade show"></div>
            <div className="modal fade-in" tabIndex={-100} style={{ display: 'block' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`${styles.modalBg} modal-content`}>
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className="modal-title text-center">Poseidon Ink</h5>
                            <button type="button" onClick={onClose} className="btn modalButtonColor" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body d-flex">
                            <div>
                                <div className='d-flex gap-5'>
                                    <a href="https://www.instagram.com/poseidonink_/" target='_blank' rel="noopener noreferrer">
                                        <button className={styles.BtnInstagram}>
                                            <span className={styles.svgContainer}>
                                                <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="2.2em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                            </span>
                                            <span className={styles.instaBG}></span>
                                        </button>
                                    </a>
                                    <a href="https://wa.me/+905537843572" target='blank'>
                                        <button className={styles.whatsappBtn}>
                                            <span className={styles.whatsappsvgContainer}>
                                                <svg viewBox="0 0 16 16" height="2.2em"  className={styles.whatsappsvgIcon} fill="white">
                                                    <path
                                                        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span className={styles.whatsappBG}></span>
                                        </button>
                                    </a>
                                    <a href="mailto:info@poseidonink.com" target='blank' >
                                        <button className={styles.gmailBtn}>
                                            <span className={styles.gmailsvgContainer}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="2.2em" fill="white" className={`bi bi-envelope ${styles.gmailsvgIcon}`} viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                                </svg>

                                            </span>
                                            <span className={styles.gmailBG}></span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={onClose} className="btn  modalButtonColor text-black" data-bs-dismiss="modal ">Kapat</button>
                            <button className="animated-button btn modalButtonColor"
                                type="button" > <a className="text-black text-decoration-none" href="tel:+905537843572" target="_blank">Randevu Al</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal