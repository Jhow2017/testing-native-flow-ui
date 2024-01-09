import React, { useState, forwardRef } from 'react';
import { Platform, TextInput, TextInputProps } from 'react-native';

//utils
import { transformPlaceholder } from '@ds/core/utils/transformPlaceholder';

//types
import { DsInputProps } from './type';

//@ds
import { DsFlex } from '@ds/components/layout';
import DsIcon from '@ds/components/global/icon';
import { DsText } from '@ds/components/typography';
import ComponentMounter from '@ds/core/component-mounter';

// @ds/config
import createAndFilterStyles from '@ds/core/utils/filters-styles-or-props/createAndFilterStyles';
import { BaseStyleView } from './styles';

const DsInput = forwardRef<TextInput, DsInputProps>(
    ({ type, ...props }, ref) => {
        const {
            children,
            _platform,
            _css,
            textTransform,
            placeholder,
            error,
            ...attr
        } = props;

        //states
        const [showPassword, setShowPassword] = useState<boolean>(false);

        // function validation properties convertion
        const filteredFlexStyle = createAndFilterStyles(attr);
        const platformStyles = _platform ? _platform(Platform) : {};
        const additionalStyles: any =
            attr.style instanceof Array ? attr.style : [attr.style];

        return (
            <ComponentMounter position="relative">
                <DsFlex position="relative" alignItems={'center'}>
                    <BaseStyleView
                        {...(props as TextInputProps)}
                        ref={ref}
                        placeholderTextColor={
                            attr.placeholderTextColor || '#6f6f6f'
                        }
                        placeholder={transformPlaceholder(
                            placeholder,
                            textTransform
                        )}
                        secureTextEntry={type === 'password' && !showPassword}
                        _css={_css}
                        style={[
                            filteredFlexStyle,
                            platformStyles,
                            additionalStyles,
                            {
                                width: filteredFlexStyle?.width || '100%',
                                height: filteredFlexStyle?.height || 60,
                                borderRadius:
                                    filteredFlexStyle?.borderRadius ?? 10,
                                borderWidth:
                                    filteredFlexStyle?.borderWidth ?? 1,
                                borderColor:
                                    filteredFlexStyle?.borderColor ?? '#363535',
                                color: filteredFlexStyle?.color ?? '#fff',
                                fontSize: filteredFlexStyle?.fontSize ?? 16,
                                fontStyle:
                                    filteredFlexStyle?.fontStyle ?? 'normal',
                                fontWeight:
                                    filteredFlexStyle?.fontWeight ?? '700',
                                padding: filteredFlexStyle?.padding ?? 16,
                                //fontFamily:  styles?.fontFamily ?? 'Inter_400Regular'
                            },
                        ]}
                    />
                    {type === 'password' && (
                        <DsIcon
                            icon={showPassword ? 'eye-show' : 'eye-hide'}
                            position="absolute"
                            size={'small'}
                            right={30}
                            color={'#5B5B5B'}
                            onPress={() => setShowPassword((prev) => !prev)}
                        />
                    )}

                    {type === 'search' && (
                        <DsIcon
                            icon={'search'}
                            position="absolute"
                            size={'small'}
                            right={30}
                            color={'#fff'}
                        />
                    )}
                </DsFlex>
                {error && (
                    <DsText color={'red'} marginTop={16}>
                        {error}
                    </DsText>
                )}
            </ComponentMounter>
        );
    }
);

export default DsInput;
