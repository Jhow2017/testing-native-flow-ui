import React, { useState, forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

//utils
import { transformPlaceholder } from '@ds/core/utils/transformPlaceholder';
import { cssInputTextOnlyPropsValue } from '@ds/core/utils/constants';
import createAndFilterStyles from '@ds/core/utils/filters-styles-or-props/createAndFilterStyles';

//types
import { DsInputProps } from './type';

//@ds
import { DsFlex } from '@ds/components/layout';
import DsIcon from '@ds/components/global/icon';
import { DsText } from '@ds/components/typography';
import ComponentMounter from '@ds/core/component-mounter';

const DsInput = forwardRef<TextInput, DsInputProps>(
    ({ type, ...props }, ref) => {
        const { children, textTransform, placeholder, error, ...attr } = props;
        const { color, fontSize, fontStyle, fontWeight, fontFamily } =
            (attr.style as DsInputProps) || {};

        //states
        const [showPassword, setShowPassword] = useState<boolean>(false);

        // filters
        const styleFilterInput = createAndFilterStyles(attr);
        const filteredStyles = createAndFilterStyles(props, [
            ...cssInputTextOnlyPropsValue,
        ]);

        return (
            <ComponentMounter
                position="relative"
                width={attr?.width || '100%'}
                height={attr?.height || 60}
                borderRadius={attr?.borderRadius ?? 10}
                borderWidth={attr?.borderWidth ?? 1}
                borderColor={attr?.borderColor ?? '#363535'}
                padding={attr?.padding ?? 16}
                {...attr}
            >
                <DsFlex alignItems={'center'}>
                    <TextInput
                        {...(filteredStyles as TextInputProps)}
                        ref={ref}
                        placeholderTextColor={
                            attr.placeholderTextColor || '#6f6f6f'
                        }
                        placeholder={transformPlaceholder(
                            placeholder,
                            textTransform
                        )}
                        secureTextEntry={type === 'password' && !showPassword}
                        style={[
                            {
                                width: '100%',
                                color:
                                    color || styleFilterInput?.color || '#fff',
                                fontSize:
                                    fontSize ||
                                    styleFilterInput?.fontSize ||
                                    16,
                                fontStyle:
                                    fontStyle ||
                                    styleFilterInput?.fontStyle ||
                                    'normal',
                                fontWeight:
                                    fontWeight ||
                                    styleFilterInput?.fontWeight ||
                                    '700',
                                //fontFamily: fontFamily ||  styleFilterInput?.fontFamily || 'Inter_400Regular'
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
