import { useToast } from '../context/ToastContext.jsx'

export default function ToastContainer() {
  const { toasts } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div className="toast" key={toast.id}>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  )
}
