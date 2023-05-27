import "./Confirm.scss"
import { createPortal } from 'react-dom'



const root = document.getElementById('root')

export default function Confirm({ visible, ok, cancel }) {
  const handleOk = () => {
    ok()
  }

  const handleCancel = () => {
    cancel()
  }

  return createPortal(
    <div className="modalRoot" style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <div className="overlay"></div>
      <div className="container-model">
        <div className="confirm">
          <p className="title">Bạn chắc chắn muốn xóa khóa học này?</p>
          <button className="btn-confirm btn btn-primary" onClick={handleOk}>OK</button>
          <button className="btn-confirm btn btn-light" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>,
    root
  )
}
