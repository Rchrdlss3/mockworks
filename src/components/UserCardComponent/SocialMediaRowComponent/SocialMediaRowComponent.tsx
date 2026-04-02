import { useContext } from "react";
import { SocialMedia } from "../../../types/user"
import {FaGithub, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import { ThemeContext } from "../../../App";

interface SocialMediaRowComponentProps {
    userSocialMedia: SocialMedia
};

const IconMap: Record<string, any> = {
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    github: FaGithub,
    twitter: FaTwitter,
};
  
interface SocialIconProps {
    platform: 'linkedin' | 'instagram' | 'github' | 'twitter';
    size?: number;
    color?: string;
}
  
export const SocialIcon = ({ platform, size = 30, color = "currentColor" }: SocialIconProps) => {
    const IconComponent = IconMap[platform];
  
    if (!IconComponent) return null;
  
    return <IconComponent size={size} color={color} />;
};

export default function SocialMediaRowComponent ({userSocialMedia}:SocialMediaRowComponentProps) {
    const theme = useContext(ThemeContext);
    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', gap: 5}}>
            <a target = "_" href = {`https://twitter.com/${userSocialMedia.twitter}`} style = {{color: 'inherit'}}><SocialIcon platform="twitter" /></a>
            <a target = "_" href = {`https://github.com/${userSocialMedia.github}`} style = {{color: 'inherit'}}><SocialIcon platform = "github" /></a>
            <a target = "_" href = {`https://${userSocialMedia.linkedin}`} style = {{color: 'inherit'}}><SocialIcon platform="linkedin" /></a>
        </div>
    )
};