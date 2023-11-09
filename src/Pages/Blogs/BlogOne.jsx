import blogs1 from "../../../images/blog1.jpg";

const BlogOne = () => {
    return (
        <div>
            <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"> 
            <div className="collapse-title text-xl font-medium">
          What Is Access and Refresh Tokens?
        </div>
        <div className="collapse-content">
          <p>
            An access token (from an authorization server) allows temporary
            access to restricted resources such as APIs or websites. Generally,
            access tokens are valid for only a few minutes or hours, depending
            on the setting to safeguard the resource server. They also include
            security features like signatures. Any user with an access token is
            automatically authenticated, regardless of whether they are genuine
            or malicious. Let’s check out an example:
          </p>
          <img className="lg:ml-[50px] p-4" src={blogs1} alt="" />
          <p>
            In this case, the client application can access the user’s resource
            using an access token. The authorization server issues an access
            token following successful user authentication and consent. The
            chance of the access token being compromised or stolen increases the
            longer it’s valid. While maintaining a positive user experience,
            pairing long-duration refresh tokens with short-duration access
            tokens improves security.
          </p>
          <h2 className="mt-4 font-bold">Refresh Tokens</h2>

          <p>
            In OAuth 2.0 authorization frameworks, refresh tokens allow
            developers to manage users’ sessions across native, web-based, and
            single-page apps. Additionally, they allow users to log in and stay
            connected without providing their passwords for long periods.
            Further, they add a layer of security for sensitive data, improving
            the user experience. Refresh tokens can last from a few days to a
            few months. Refresh tokens by themselves don’t grant the user any
            access. To avoid needless re-authentication, they prolong the
            duration of the session.
          </p>
          <p>
            Let’s take an example of an access token that is only good for 8
            minutes for accessing an application. What happens if we spend 16
            minutes using the application? From a security standpoint, the
            session should end after 8 minutes. There’s no benefit to a user who
            experiences this, and there’s a risk of low user satisfaction. Using
            a refresh token in this situation would help to create a new set of
            access and refresh tokens after 8 minutes without asking users to
            re-enter their credentials. Typically, we want to configure the
            refresh token’s lifetime to be much longer. Further, it’s possible
            for applications to get fresh access tokens during the refresh
            token’s lifetime without having to ask the user to re-authenticate.
          </p>
          <p>
            Reuse and Reauthentication When the authorization server notices a
            refresh token reuse, it instantly revokes the refresh token and
            prevents a user from accessing subsequent requests. Reauthentication
            is required since there is no way to tell if the refresh token is
            coming from a reliable source. By identifying an invalid refresh
            token usage, whether by a genuine client or an attacker, the
            authorization server can discover a breach caused by a compromised
            refresh token. This is because the authorization server keeps the
            old refresh token after issuing a new one.
          </p>
        </div>
        </div>
        </div>
    );
};

export default BlogOne;