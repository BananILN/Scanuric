import React from 'react';
import { Icon } from './UI/Icon';

interface HeaderProps {
    onClose?: () => void;
    onArrow?: () => void;
    onDot?: () => void;
    title?: string;
    showSetting?: boolean;
}

export default function Header({ onClose, onArrow, onDot, title = "Scanuric", showSetting = true }: HeaderProps) {
  return (
    <header style={{ 
      background: '#001529', 
      color: 'white', 
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <div className="header-main" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          width: '100%',
          justifyContent: 'space-between'
        }}>
            {/* Кнопка закрытия */}
            <button 
              className="button-close" 
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                borderRadius: '4px'
              }}
            >
                <Icon name="close" size={16} color="white" />
                <span className="button-content">Close</span>
            </button>
            
            {/* Заголовок */}
            <div className="title-name" style={{ 
              fontSize: '18px', 
              fontWeight: 'bold' 
            }}>
                {title}
            </div>
            
            {/* Меню настроек */}
            <div className="setting-menu" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px' 
            }}>
                {showSetting && (
                    <>
                        <button 
                          className="arrowMenu-button" 
                          onClick={onArrow}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px'
                          }}
                        >
                            <Icon name="arrowMenu" size={16} color="white" />
                        </button>
                        <button 
                          className="dotMenu-button" 
                          onClick={onDot}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px'
                          }}
                        >
                            <Icon name="dotMenu" size={16} color="white" />
                        </button>
                    </>
                )}
            </div>
        </div>
    </header>
  );
}