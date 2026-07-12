---
name: Delta Robotics
colors:
  surface: '#fff8f6'
  surface-dim: '#efd5ca'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1eb'
  surface-container: '#ffeae1'
  surface-container-high: '#fee3d8'
  surface-container-highest: '#f8ddd2'
  on-surface: '#261812'
  on-surface-variant: '#5a4136'
  inverse-surface: '#3d2d26'
  inverse-on-surface: '#ffede6'
  outline: '#8e7164'
  outline-variant: '#e2bfb0'
  surface-tint: '#a14000'
  primary: '#a14000'
  on-primary: '#ffffff'
  primary-container: '#ff6a00'
  on-primary-container: '#571f00'
  inverse-primary: '#ffb694'
  secondary: '#5e5e63'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfe4'
  on-secondary-container: '#626267'
  tertiary: '#0062a1'
  on-tertiary: '#ffffff'
  tertiary-container: '#009eff'
  on-tertiary-container: '#003357'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb694'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7b2f00'
  secondary-fixed: '#e3e2e7'
  secondary-fixed-dim: '#c7c6cb'
  on-secondary-fixed: '#1a1b1f'
  on-secondary-fixed-variant: '#46464b'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9ccaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497a'
  background: '#fff8f6'
  on-background: '#261812'
  surface-variant: '#f8ddd2'
  bg-alt: '#F7F7F8'
  border: '#E5E5E7'
  accent-tint: '#FFF1E6'
  success: '#16A34A'
  warning: '#F59E0B'
  danger: '#DC2626'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-md-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  sidebar-width: 260px
  navbar-height: 64px
  container-padding: 24px
  gutter: 16px
---

Delta Robotics — Design System (light theme only)
Colors
bg: #FFFFFF | bg-alt (sidebar): #F7F7F8 | border: #E5E5E7
accent: #FF6A00 (actions/active only) | accent-tint: #FFF1E6
text: #0D0D0D | text-secondary: #6B6B70
success #16A34A | warning #F59E0B | danger #DC2626
Type
Inter/system sans. Headings 600-700. Body 14px/400-500. Labels 12px uppercase, text-secondary.
Shape
8px spacing unit. Card radius 12px. Input/button radius 8px. Shadow: 0 1px 3px rgba(0,0,0,.06) only.
Sidebar (fixed, all pages)
260px, bg-alt, right border. Logo (orange square+triangle) + "DELTA ROBOTICS/ADMIN CONSOLE" top. Nav order: Dashboard, Students, Enrollments, Courses, Experiences, Inventory, Workshops, Gallery, Reports, Settings. Active: accent-tint bg + accent left-border(3px)+icon/text. Inactive: text-secondary. Bottom: avatar+name+role.
Navbar (fixed, all pages)
64px, bottom border. Left: search. Right: bell, help, "Support" link, orange primary button (label varies).
Components
Button: primary=accent bg/white text; secondary=white bg/border outline; destructive=danger text
Card: white, border, radius 12px, 20-24px padding
Badge: pill, success/warning/danger/neutral tints per status
Table: text-secondary uppercase header, border-divided rows, bg-alt hover
Drawer: right slide-in, 400-480px, labels 12px uppercase, inputs 40px/radius 8px/accent focus ring
Rule
Reuse sidebar/navbar/components as-is on every page. Only content area changes per page.