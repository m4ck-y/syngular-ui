import { useState } from 'react'
import '@/fui/hud/fui-theme.css'
import '@/fui/glass/fui-glass-theme.css'
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
import {
  FuiGlassButton,
  FuiGlassInput,
  FuiGlassCard,
  FuiGlassTable,
  FuiGlassSelect,
  FuiGlassCheckbox,
  FuiGlassRadio,
  FuiGlassProgress,
  FuiGlassBadge,
  FuiGlassTooltip,
  FuiGlassToggle,
  FuiGlassSlider,
  FuiGlassAccordion,
  FuiGlassToast,
  FuiGlassSpinner,
} from '@/fui/glass'
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

type StyleTab = 'fui' | 'fui-glass' | 'glassmorphism'

export const ComponentsPage: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState<StyleTab>('fui')
  const [toggleState, setToggleState] = useState(false)
  const [sliderValue, setSliderValue] = useState(75)
  const [checkboxState, setCheckboxState] = useState({ a: true, b: false })
  const [radioState, setRadioState] = useState('1')

  // Glass states
  const [glassCheckbox1, setGlassCheckbox1] = useState(true)
  const [glassCheckbox2, setGlassCheckbox2] = useState(false)
  const [glassRadio, setGlassRadio] = useState('glass1')
  const [glassSelect, setGlassSelect] = useState('')
  const [glassToggle, setGlassToggle] = useState(true)
  const [glassSlider, setGlassSlider] = useState(75)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // FUI Glass states
  const [fuiGlassCheckbox1, setFuiGlassCheckbox1] = useState(true)
  const [fuiGlassCheckbox2, setFuiGlassCheckbox2] = useState(false)
  const [fuiGlassRadio, setFuiGlassRadio] = useState('fui1')
  const [fuiGlassToggle, setFuiGlassToggle] = useState(true)
  const [fuiGlassSlider, setFuiGlassSlider] = useState(65)

  return (
    <div className={activeStyle === 'glassmorphism' ? 'glassmorphism' : activeStyle === 'fui-glass' ? 'fui-glass-container' : 'fui-hud'}>
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
            className={`${styles.styleTab} ${activeStyle === 'fui-glass' ? styles.active : ''}`}
            onClick={() => setActiveStyle('fui-glass')}
          >
            FUI GLASS
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
                    <FuiInput label="Password" type="password" placeholder="••••••" />
                    <FuiInput label="Disabled" disabled value="System disabled" />
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiSelect</div>
                  <div className={styles.componentDemo}>
                    <FuiSelect
                      label="Select Option"
                      options={[
                        { value: '', label: 'Select...' },
                        { value: '1', label: 'Option Alpha' },
                        { value: '2', label: 'Option Beta' },
                        { value: '3', label: 'Option Gamma' },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiFileUpload</div>
                  <div className={styles.fileSection}>
                    <FuiFileUpload label="Upload File" />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} BUTTONS</h2>
              <div className={styles.componentsGrid}>
                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiButton Variants</div>
                  <div className={styles.componentDemo}>
                    <FuiButton>Primary</FuiButton>
                    <FuiButton variant="secondary">Secondary</FuiButton>
                    <FuiButton variant="success">Success</FuiButton>
                    <FuiButton variant="danger">Danger</FuiButton>
                    <FuiButton disabled>Disabled</FuiButton>
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiInitiateButton</div>
                  <div className={styles.componentDemo}>
                    <FuiInitiateButton direction="right" label="INITIATE" />
                    <FuiInitiateButton direction="left" label="INITIATE" />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} FORMS</h2>
              <div className={styles.componentsGrid}>
                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiCheckbox</div>
                  <div className={styles.checkboxGroup}>
                    <FuiCheckbox
                      label="Option A"
                      checked={checkboxState.a}
                      onChange={(c) => setCheckboxState({ ...checkboxState, a: c })}
                    />
                    <FuiCheckbox
                      label="Option B"
                      checked={checkboxState.b}
                      onChange={(c) => setCheckboxState({ ...checkboxState, b: c })}
                    />
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiRadioGroup</div>
                  <div className={styles.radioGroup}>
                    <FuiRadioGroup
                      name="demo"
                      options={[
                        { value: '1', label: 'Choice 1' },
                        { value: '2', label: 'Choice 2' },
                        { value: '3', label: 'Choice 3' },
                      ]}
                      selected={radioState}
                      onChange={(v) => setRadioState(v)}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} CONTROLS</h2>
              <div className={styles.componentsGrid}>
                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiToggle</div>
                  <div className={styles.toggleGroup}>
                    <FuiToggle
                      label="Enable Feature"
                      defaultActive={toggleState}
                      onChange={(active) => setToggleState(active)}
                    />
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiSlider</div>
                  <div className={styles.sliderSection}>
                    <FuiSlider
                      label="Volume"
                      value={sliderValue}
                      onChange={(v) => setSliderValue(v)}
                    />
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiProgressBar</div>
                  <div>
                    <div className={styles.progressSection}>
                      <FuiProgressBar value={45} label="System Load" />
                    </div>
                    <div className={styles.progressSection}>
                      <FuiProgressBar value={78} variant="warning" label="Memory" />
                    </div>
                    <div className={styles.progressSection}>
                      <FuiProgressBar value={92} variant="danger" label="Critical" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} BADGES & INDICATORS</h2>
              <div className={styles.componentsGrid}>
                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiBadge</div>
                  <div className={styles.badgesGroup}>
                    <FuiBadge variant="info">INFO</FuiBadge>
                    <FuiBadge variant="success">SUCCESS</FuiBadge>
                    <FuiBadge variant="warning">WARNING</FuiBadge>
                    <FuiBadge variant="danger">DANGER</FuiBadge>
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiStatusIndicator</div>
                  <div className={styles.statusGroup}>
                    <FuiStatusIndicator status="online">ONLINE</FuiStatusIndicator>
                    <FuiStatusIndicator status="warning">WARNING</FuiStatusIndicator>
                    <FuiStatusIndicator status="offline">OFFLINE</FuiStatusIndicator>
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiChip</div>
                  <div className={styles.chipsGroup}>
                    <FuiChip icon="*">ALPHA</FuiChip>
                    <FuiChip icon="o">BETA</FuiChip>
                    <FuiChip icon="-">GAMMA</FuiChip>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} CARDS</h2>
              <div className={styles.componentsGrid}>
                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiCard</div>
                  <div className={styles.componentDemo}>
                    <FuiCard title="CPU" value="23%" sub="IDLE" />
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiCard Decorated</div>
                  <div className={styles.componentDemo}>
                    <FuiCard decorated title="UNIT STATUS">
                      <p style={{ fontSize: 12, color: '#00ffff80' }}>
                        System operational. All sensors active.
                      </p>
                    </FuiCard>
                  </div>
                </div>

                <div className={styles.componentItem}>
                  <div className={styles.componentName}>FuiHeaderBar</div>
                  <div className={styles.componentDemo}>
                    <FuiHeaderBar title="SYSTEM MONITOR" dots={['active', 'warning', 'inactive']} />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} TABLE</h2>
              <div className={styles.tableSection}>
                <FuiTable columns={tableColumns} data={tableData} />
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} INFO ROWS</h2>
              <div className={styles.infoRows}>
                <FuiInfoRow label="PROCESSOR" value="INTEL i7-12700K" />
                <FuiInfoRow label="MEMORY" value="32GB DDR5" />
                <FuiInfoRow label="STORAGE" value="2TB NVMe" />
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} ANIMATIONS</h2>
              <div className={styles.componentItem}>
                <div className={styles.componentName}>FuiGlitch</div>
                <div style={{ padding: '20px', background: 'rgba(0,0,0,0.5)', textAlign: 'center' }}>
                  <FuiGlitch text="SYSTEM FAILURE" tag="h2" />
                </div>
              </div>

              <div className={styles.componentItem}>
                <div className={styles.componentName}>FuiTypewriter</div>
                <div style={{ padding: '20px', background: 'rgba(0,0,0,0.5)', textAlign: 'center' }}>
                  <FuiTypewriter
                    phrases={['INITIALIZING NEURAL NET', 'CALIBRATING SENSORS', 'SYSTEM READY']}
                    typingSpeed={50}
                  />
                </div>
              </div>

              <div className={styles.componentItem}>
                <div className={styles.componentName}>FuiPulsingDots</div>
                <FuiPulsingDots />
              </div>

              <div className={styles.componentItem}>
                <div className={styles.componentName}>FuiParticles</div>
                <div style={{ position: 'relative', height: '200px', border: '1px solid #00ffff40', overflow: 'hidden' }}>
                  <FuiParticles />
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} TOOLTIP</h2>
              <div className={styles.componentItem}>
                <div className={styles.componentName}>FuiTooltip</div>
                <div className={styles.tooltipDemo}>
                  <FuiTooltip content="System Information">[<span style={{ color: '#00ffff' }}>?</span>]</FuiTooltip>
                  <FuiTooltip content="Help Documentation">[<span style={{ color: '#00ffff' }}>?</span>]</FuiTooltip>
                  <FuiTooltip content="Contact Support">[<span style={{ color: '#00ffff' }}>?</span>]</FuiTooltip>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} DECORATIVE</h2>
              <div className={styles.componentItem} style={{ marginBottom: 20 }}>
                <div className={styles.componentName}>FuiCornerBrackets</div>
                <FuiCornerBrackets />
              </div>
              <div className={styles.componentItem} style={{ marginBottom: 20 }}>
                <div className={styles.componentName}>FuiDecoratedCard</div>
                <FuiDecoratedCard title="// UNIT STATUS">
                  System operational. All sensors active.<br />
                  Neural link: <span style={{ color: '#00ffff' }}>STABLE</span>
                </FuiDecoratedCard>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} TEXTURES</h2>
              <div className={styles.componentItem} style={{ marginBottom: 20 }}>
                <div className={styles.componentName}>FuiBackgrounds</div>
                <FuiBackgrounds />
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} NETWORK</h2>
              <div className={styles.componentItem}>
                <div className={styles.componentName}>FuiNetworkTraffic</div>
                <FuiNetworkTraffic />
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{'::'} TICKERS</h2>
              <div className={styles.componentItem} style={{ marginBottom: 20 }}>
                <div className={styles.componentName}>FuiCryptoTicker</div>
                <FuiCryptoTicker type="crypto" />
              </div>
              <div className={styles.componentItem}>
                <div className={styles.componentName}>FuiCryptoTicker (Stock)</div>
                <FuiCryptoTicker type="stock" />
              </div>
            </section>
          </>
        ) : activeStyle === 'fui-glass' ? (
          <div className={styles.fuiGlassCatalog}>
            <h1 className={styles.fuiGlassTitle}>FUI GLASS COMPONENTS</h1>
            <p className={styles.fuiGlassSubtitle}>{'::'} FUTURISTIC UI WITH GLASS EFFECTS {'::'}</p>

            <section className={styles.fuiGlassSection}>
              <h2 className={styles.fuiGlassSectionTitle}>{'::'} INPUTS & FORMS</h2>
              <div className={styles.fuiGlassGrid}>
                <FuiGlassCard title="Text Inputs" badge="GLASS">
                  <FuiGlassInput label="Username" placeholder="Enter username..." />
                  <FuiGlassInput label="Email" type="email" placeholder="user@domain.com" />
                  <FuiGlassInput label="Password" type="password" placeholder="••••••••••" />
                  <FuiGlassInput label="Disabled" disabled value="System Disabled" />
                </FuiGlassCard>

                <FuiGlassCard title="Select & Controls" badge="DROPDOWN">
                  <FuiGlassSelect
                    label="Select Option"
                    options={[
                      { value: '', label: 'Select an option...' },
                      { value: 'alpha', label: 'Option Alpha' },
                      { value: 'beta', label: 'Option Beta' },
                      { value: 'gamma', label: 'Option Gamma' },
                    ]}
                  />
                  <div style={{ marginTop: '16px' }}>
                    <FuiGlassCheckbox 
                      label="Option A" 
                      checked={fuiGlassCheckbox1}
                      onChange={setFuiGlassCheckbox1}
                    />
                    <FuiGlassCheckbox 
                      label="Option B" 
                      checked={fuiGlassCheckbox2}
                      onChange={setFuiGlassCheckbox2}
                    />
                  </div>
                </FuiGlassCard>

                <FuiGlassCard title="Radio & Toggle" badge="SELECTION">
                  <div style={{ marginBottom: '16px' }}>
                    <FuiGlassRadio 
                      label="Choice 1" 
                      name="fui-demo" 
                      value="fui1"
                      checked={fuiGlassRadio === 'fui1'}
                      onChange={setFuiGlassRadio}
                    />
                    <FuiGlassRadio 
                      label="Choice 2" 
                      name="fui-demo" 
                      value="fui2"
                      checked={fuiGlassRadio === 'fui2'}
                      onChange={setFuiGlassRadio}
                    />
                  </div>
                  <FuiGlassToggle 
                    label="Enable Feature"
                    checked={fuiGlassToggle}
                    onChange={setFuiGlassToggle}
                  />
                </FuiGlassCard>
              </div>
            </section>

            <section className={styles.fuiGlassSection}>
              <h2 className={styles.fuiGlassSectionTitle}>{'::'} BUTTONS & ACTIONS</h2>
              <div className={styles.fuiGlassGrid}>
                <FuiGlassCard title="Button Variants" badge="INTERACTIVE">
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <FuiGlassButton variant="primary">Primary</FuiGlassButton>
                    <FuiGlassButton variant="secondary">Secondary</FuiGlassButton>
                    <FuiGlassButton variant="success">Success</FuiGlassButton>
                    <FuiGlassButton variant="danger">Danger</FuiGlassButton>
                  </div>
                  <div style={{ marginTop: '12px' }}>
                    <FuiGlassButton disabled>Disabled</FuiGlassButton>
                  </div>
                </FuiGlassCard>

                <FuiGlassCard title="Badges & Status" badge="TAGS">
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    <FuiGlassBadge>DEFAULT</FuiGlassBadge>
                    <FuiGlassBadge variant="success">SUCCESS</FuiGlassBadge>
                    <FuiGlassBadge variant="warning">WARNING</FuiGlassBadge>
                    <FuiGlassBadge variant="danger">DANGER</FuiGlassBadge>
                  </div>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <FuiGlassSpinner size="small" />
                    <FuiGlassSpinner size="medium" variant="secondary" />
                    <FuiGlassSpinner size="large" variant="success" />
                  </div>
                </FuiGlassCard>

                <FuiGlassCard title="Tooltips" badge="HOVER">
                  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <FuiGlassTooltip tip="System Information">[?] Info</FuiGlassTooltip>
                    <FuiGlassTooltip tip="Help Documentation">[?] Help</FuiGlassTooltip>
                    <FuiGlassTooltip tip="Contact Support">[?] Support</FuiGlassTooltip>
                  </div>
                </FuiGlassCard>
              </div>
            </section>

            <section className={styles.fuiGlassSection}>
              <h2 className={styles.fuiGlassSectionTitle}>{'::'} PROGRESS & CONTROLS</h2>
              <div className={styles.fuiGlassGrid}>
                <FuiGlassCard title="Progress Bars" badge="LOADING">
                  <FuiGlassProgress label="System Load" value={45} />
                  <FuiGlassProgress label="Memory Usage" value={78} variant="warning" />
                  <FuiGlassProgress label="Critical Level" value={92} variant="danger" />
                </FuiGlassCard>

                <FuiGlassCard title="Slider Control" badge="RANGE">
                  <FuiGlassSlider 
                    label="Volume"
                    min={0}
                    max={100}
                    value={fuiGlassSlider}
                    onChange={setFuiGlassSlider}
                  />
                  <div style={{ marginTop: '16px', textAlign: 'center', color: '#00ffff', fontSize: '14px' }}>
                    Current Value: {fuiGlassSlider}%
                  </div>
                </FuiGlassCard>

                <FuiGlassCard title="Data Table" badge="RECORDS">
                  <FuiGlassTable
                    columns={[
                      { key: 'id', header: '#' },
                      { key: 'name', header: 'Name' },
                      { key: 'status', header: 'Status' },
                      { key: 'value', header: 'Value' },
                    ]}
                    data={[
                      { id: '001', name: 'Alpha Unit', status: 'ACTIVE', value: '12,450' },
                      { id: '002', name: 'Beta Unit', status: 'ONLINE', value: '8,320' },
                      { id: '003', name: 'Gamma Unit', status: 'PENDING', value: '3,100' },
                    ]}
                  />
                </FuiGlassCard>
              </div>
            </section>

            <section className={styles.fuiGlassSection}>
              <h2 className={styles.fuiGlassSectionTitle}>{'::'} EXPANDABLE & NOTIFICATIONS</h2>
              <div className={styles.fuiGlassGrid}>
                <FuiGlassCard title="Accordion Panels" badge="EXPANDABLE">
                  <FuiGlassAccordion title="// SYSTEM CONFIG" defaultOpen>
                    Configuration panel for system parameters. Adjust settings according to operational requirements.
                  </FuiGlassAccordion>
                  <FuiGlassAccordion title="// NETWORK STATUS">
                    Connection: ACTIVE<br />
                    Latency: 12ms<br />
                    Packet Loss: 0%
                  </FuiGlassAccordion>
                  <FuiGlassAccordion title="// SECURITY LOG">
                    Last access: 00:42:17<br />
                    Failed attempts: 0<br />
                    IP Address: 192.168.1.xxx
                  </FuiGlassAccordion>
                </FuiGlassCard>

                <FuiGlassCard title="Toast Notifications" badge="ALERTS">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <FuiGlassToast 
                      title="SYSTEM UPDATE" 
                      message="Core firmware v4.2 deployed successfully"
                      variant="info"
                      time="2m ago"
                    />
                    <FuiGlassToast 
                      title="SYNC COMPLETE" 
                      message="All 12 nodes synchronized"
                      variant="success"
                      time="5m ago"
                    />
                    <FuiGlassToast 
                      title="HIGH LOAD" 
                      message="Sector 7 at 87% capacity"
                      variant="warning"
                      time="12m ago"
                    />
                    <FuiGlassToast 
                      title="BREACH DETECTED" 
                      message="Unauthorized access attempt blocked"
                      variant="error"
                      time="18m ago"
                    />
                  </div>
                </FuiGlassCard>
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