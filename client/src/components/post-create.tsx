import axios from "axios";
import { SyntheticEvent, useState } from "react";

const CREATE_POST_URL = "http://localhost:4000/posts/post";

export const PostCreate: React.FC = () => {
    const [content, setContent] = useState("");

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        await axios.post(CREATE_POST_URL, { content });
        setContent("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>content</label>
                    <input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary">submit</button>
            </form>
        </div>
    );
};
