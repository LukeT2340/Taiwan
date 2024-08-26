import { motion } from 'framer-motion'
import logo from '../../../assets/images/common/logo.svg'
import CustomLink from '../../miscellaneous/CustomLink.tsx'
import { BRAND_URL, BRAND_NAME } from '../../../js/global-variables.tsx'

const Header = () => {
  return (
    <motion.header
      className="integration-message"
      initial={{ opacity: 0, y: '-10rem' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}>
      <h3 className="integration-text">
        Advertising feature <span className="reader-only">{`sponsored by ${BRAND_NAME}`}</span>
      </h3>
      <CustomLink href={BRAND_URL} className="integration-logo">
        <img src={logo} alt={`${BRAND_NAME} logo`} />
      </CustomLink>
    </motion.header>
  )
}

export default Header
