import { useState } from 'react'
import '@/fui/hud/fui-theme.css'
import '@/neumorphism/neumorphic-theme.css'
import '@/glassmorphism/glass-theme.css'
import {
  FuiInput,
  FuiButton,
  FuiCard,
  FuiBadge,
  FuiChip,
  FuiStatusIndicator,
  FuiToggle,
  FuiSlider,
  FuiProgressBar,
  FuiSelect,
  FuiCheckbox,
  FuiRadioGroup,
  FuiFileUpload,
  FuiTable,
  FuiInfoRow,
  FuiHeaderBar,
  FuiTooltip,
  FuiCornerBrackets,
  FuiBackgrounds,
  FuiDecoratedCard,
  FuiPulsingDots,
  FuiNetworkTraffic,
  FuiCryptoTicker,
  FuiInitiateButton,
  FuiGlitch,
  FuiTypewriter,
  FuiParticles,
} from '@/fui/hud'
import {
  NeumorphicButton,
  NeumorphicCard,
  NeumorphicInput,
  NeumorphicCheckbox,
  NeumorphicRadio,
  NeumorphicSelect,
  NeumorphicTable,
} from '@/neumorphism'
import {
  GlassButton,
  GlassInput,
  GlassSelect,
  GlassCheckbox,
  GlassRadio,
  GlassTable,
  GlassModal,
  GlassCard,
  GlassToggle,
  GlassSlider,
  GlassBadge,
  GlassProgressBar,
  GlassChart,
  GlassNavigation,
  GlassIndicator,
  GlassIconCard,
  GlassCircularProgress,
  GlassMediaPlayer,
  GlassLoginCard,
} from '@/glassmorphism'
import styles from './ComponentsPage.module.css'

const tableData = [
  { name: 'Alpha Unit', status: 'ACTIVE', value: '12,450' },
  { name: 'Beta Unit', status: 'ONLINE', value: '8,320' },
  { name: 'Gamma Unit', status: 'PENDING', value: '3,100' },
  { name: 'Delta Unit', status: 'ERROR', value: '0' },
]

const tableColumns: any[] = [
  { key: 'name', header: 'NAME' },
  { key: 'status', header: 'STATUS', render: (val: string) => <FuiBadge variant={val === 'ERROR' ? 'danger' : val === 'ONLINE' ? 'success' : val === 'PENDING' ? 'warning' : 'info'}>{val}</FuiBadge> },
  { key: 'value', header: 'VALUE' },
]

const neuTableData = [
  { name: 'Alice Johnson', role: 'Designer', status: 'Active' },
  { name: 'Bob Smith', role: 'Developer', status: 'Active' },
  { name: 'Carol Davis', role: 'Manager', status: 'Inactive' },
]

const neuTableColumns = [
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role' },
  { key: 'status', header: 'Status' },
]

const glassTableData = [
  { product: 'Glass UI Kit', price: '$49', status: 'Available' },
  { product: 'Blur Components', price: '$29', status: 'Available' },
  { product: 'Transparent Cards', price: '$19', status: 'Sold Out' },
]

const glassTableColumns = [
  { key: 'product', header: 'Product' },
  { key: 'price', header: 'Price' },
  { key: 'status', header: 'Status' },
]

const chartData = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 80 },
  { label: 'Apr', value: 35 },
  { label: 'May', value: 65 },
]

const lineChartData = [
  { label: 'Week 1', value: 20 },
  { label: 'Week 2', value: 45 },
  { label: 'Week 3', value: 30 },
  { label: 'Week 4', value: 70 },
  { label: 'Week 5', value: 55 },
]

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠', active: true },
  { id: 'likes', label: 'Likes', icon: '❤️' },
  { id: 'list', label: 'My List', icon: '📋' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
]
const loginOptions = [
  { id: 'user', label: 'User log in', icon: '👤', variant: 'green' as const },
  { id: 'password', label: 'Password', icon: '🔒', variant: 'orange' as const },
  { id: 'code', label: 'Code log in', icon: '📱', variant: 'pink' as const },
  { id: 'pin', label: 'Pin log in', icon: '🔢', variant: 'blue' as const },
]

type StyleTab = 'fui' | 'neumorphism' | 'glassmorphism'

export const ComponentsPage: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState<StyleTab>('fui')
  const [toggleState, setToggleState] = useState(false)
  const [sliderValue, setSliderValue] = useState(75)
  const [checkboxState, setCheckboxState] = useState({ a: true, b: false })
  const [radioState, setRadioState] = useState('1')
  
  // Neumorphic states
  const [neuCheckbox1, setNeuCheckbox1] = useState(true)
  const [neuCheckbox2, setNeuCheckbox2] = useState(false)
  const [neuRadio, setNeuRadio] = useState('option1')
  const [neuSelect, setNeuSelect] = useState('')

  // Glass states
  const [glassCheckbox1, setGlassCheckbox1] = useState(true)
  const [glassCheckbox2, setGlassCheckbox2] = useState(false)
  const [glassRadio, setGlassRadio] = useState('glass1')
  const [glassSelect, setGlassSelect] = useState('')
  const [glassToggle, setGlassToggle] = useState(true)
  const [glassSlider, setGlassSlider] = useState(75)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={activeStyle === 'neumorphism' ? 'neumorphic' : activeStyle === 'glassmorphism' ? 'glassmorphism' : 'fui-hud'}>
      <div className="gridBg" />
      <div className="scanlines" />
      <div className={styles.catalog}>
        <div className={styles.styleTabs}>
          <button
            className={`${styles.styleTab} ${activeStyle === 'fui' ? styles.active : ''}`}
            onClick={() => setActiveStyle('fui')}
          >
            FUI HUD
          </button>
          <button
            className={`${styles.styleTab} ${activeStyle === 'neumorphism' ? styles.active : ''}`}
            onClick={() => setActiveStyle('neumorphism')}
          >
            NEUMORPHISM
          </button>
          <button
            className={`${styles.styleTab} ${activeStyle === 'glassmorphism' ? styles.active : ''}`}
            onClick={() => setActiveStyle('glassmorphism')}
          >
            GLASSMORPHISM
          </button>
        </div>
        {activeStyle === 'fui' ? (
          <>
            <h1 className={styles.title}>FUI HUD COMPONENTS</h1>
            <p className={styles.subtitle}>{'::'} REUSABLE COMPONENTS CATALOG {'::'}</p>
            
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} INPUTS</h2>
              <div className={styles.componentsGrid}>
                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiInput</div>
                  <div className={styles.componentDemo}>
                    <FuiInput label="Username" placeholder="Enter username..." />
                    <FuiInput label="Email" type="email" placeholder="user@domain.com" />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} BUTTONS</h2>
              <div className={styles.componentsGrid}>
                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiButton</div>
                  <div className={styles.componentDemo}>
                    <FuiButton>Primary</FuiButton>
                    <FuiButton variant="secondary">Secondary</FuiButton>
                    <FuiButton variant="success">Success</FuiButton>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : activeStyle === 'neumorphism' ? (
          <div className={styles.neuCatalog}>
            <h1 className={styles.neuTitle}>Neumorphic Components</h1>
            <p className={styles.neuSubtitle}>Soft, elegant design with depth and dimension</p>

            <section className={styles.neuSection}>
              <h2 className={styles.neuSectionTitle}>Buttons</h2>
              <div className={styles.neuGrid}>
                <NeumorphicButton variant="primary">Primary</NeumorphicButton>
                <NeumorphicButton variant="secondary">Secondary</NeumorphicButton>
                <NeumorphicButton variant="success">Success</NeumorphicButton>
              </div>
            </section>

            <section className={styles.neuSection}>
              <h2 className={styles.neuSectionTitle}>Cards</h2>
              <div className={styles.neuGrid}>
                <NeumorphicCard title="Default Card">
                  <p>This is a default neumorphic card with soft shadows.</p>
                </NeumorphicCard>
              </div>
            </section>
          </div>
        ) : (
          <div className={styles.glassCatalog}>
            <h1 className={styles.glassTitle}>Glassmorphism Components</h1>
            <p className={styles.glassSubtitle}>Transparent, blurred, and beautiful</p>

            <section className={styles.glassSection}>
              <h2 className={styles.glassSectionTitle}>Icon Cards & Actions</h2>
              <div className={styles.glassCardsGrid}>
                <GlassCard title="Quick Actions" variant="default">
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <GlassIconCard icon="💬" variant="blue" size="medium" />
                    <GlassIconCard icon="📊" variant="orange" size="medium" />
                    <GlassIconCard icon="⚡" variant="green" size="medium" />
                    <GlassIconCard icon="🔄" variant="pink" size="medium" />
                  </div>
                </GlassCard>
                
                <GlassCard title="Button Variants" variant="blur">
                  <div className={styles.glassGrid}>
                    <GlassButton variant="primary">Primary</GlassButton>
                    <GlassButton variant="secondary">Secondary</GlassButton>
                    <GlassButton variant="success">Success</GlassButton>
                    <GlassButton variant="ghost">Ghost</GlassButton>
                  </div>
                </GlassCard>
                
                <GlassCard title="Login Options" variant="strong">
                  <GlassLoginCard 
                    options={loginOptions}
                    onOptionClick={(id) => console.log('Login:', id)}
                  />
                </GlassCard>
              </div>
            </section>

            <section className={styles.glassSection}>
              <h2 className={styles.glassSectionTitle}>Progress & Analytics</h2>
              <div className={styles.glassCardsGrid}>
                <GlassCard title="Circular Progress" variant="default">
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <GlassCircularProgress value={75} variant="green" label="LOREM" showValue />
                    <GlassCircularProgress value={60} variant="purple" label="IPSUM" showValue />
                    <GlassCircularProgress value={45} variant="pink" label="DOLOR" showValue />
                  </div>
                </GlassCard>
                
                <GlassCard title="Market Popularity" variant="blur">
                  <GlassChart data={lineChartData} type="line" />
                </GlassCard>
                
                <GlassCard title="Monthly Stats" variant="strong">
                  <GlassChart data={chartData} type="bar" />
                </GlassCard>
              </div>
            </section>

            <section className={styles.glassSection}>
              <h2 className={styles.glassSectionTitle}>Media & Controls</h2>
              <div className={styles.glassCardsGrid}>
                <GlassCard title="Media Player" variant="blur">
                  <GlassMediaPlayer 
                    title="Lorem Ipsum"
                    subtitle="Dolor sit"
                    duration={180}
                    currentTime={45}
                  />
                </GlassCard>
                
                <GlassCard title="Navigation Menu" variant="default">
                  <GlassNavigation 
                    items={navItems}
                    onItemClick={(id) => console.log('Nav:', id)}
                  />
                </GlassCard>
                
                <GlassCard title="System Controls" variant="strong">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <GlassToggle label="Auto-sync" defaultActive={glassToggle} onChange={setGlassToggle} />
                    <GlassSlider label="Quality" value={glassSlider} onChange={setGlassSlider} />
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <GlassBadge variant="success" pulse>Online</GlassBadge>
                      <GlassBadge variant="warning">Processing</GlassBadge>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </section>

            <section className={styles.glassSection}>
              <h2 className={styles.glassSectionTitle}>Forms & Data</h2>
              <div className={styles.glassCardsGrid}>
                <GlassCard title="Form Controls" variant="default">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <GlassInput label="Username" placeholder="Enter username" />
                    <GlassSelect
                      label="Theme"
                      options={[
                        { value: 'light', label: 'Light Theme' },
                        { value: 'dark', label: 'Dark Theme' },
                        { value: 'auto', label: 'Auto Theme' },
                      ]}
                      value={glassSelect}
                      onChange={setGlassSelect}
                    />
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <GlassCheckbox 
                        label="Notifications" 
                        checked={glassCheckbox1}
                        onChange={setGlassCheckbox1}
                      />
                      <GlassCheckbox 
                        label="Newsletter" 
                        checked={glassCheckbox2}
                        onChange={setGlassCheckbox2}
                      />
                    </div>
                  </div>
                </GlassCard>
                
                <GlassCard title="Data Table" variant="blur">
                  <GlassTable columns={glassTableColumns} data={glassTableData} />
                </GlassCard>
                
                <GlassCard title="Advanced Modal" variant="strong">
                  <p style={{ marginBottom: '16px', color: 'var(--glass-text-secondary)', fontSize: '14px' }}>
                    Complete glassmorphic modal with form validation and blur effects.
                  </p>
                  <GlassButton variant="primary" onClick={() => setIsModalOpen(true)}>
                    Open Form Modal
                  </GlassButton>
                </GlassCard>
              </div>
            </section>

            <GlassModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Advanced Contact Form"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ComponentsPage