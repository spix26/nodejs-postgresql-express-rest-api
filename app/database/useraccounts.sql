CREATE TABLE public.useraccounts (
	userid int2 NOT NULL,
	username varchar(15) NOT NULL,
	"password" text NOT NULL,
	usertype varchar(15) NOT NULL,
	useremail varchar(50) NULL,
	usersession text NULL
);

INSERT INTO public.useraccounts (userid,username,"password",usertype,useremail,usersession) VALUES 
(1,'ari','6dc95eb82a9aeb8bd5b4bc7534353a08827d424d83a88e2a58c7a5c2bc3ff2d9231462a5ad8470ec8c5370dfd75380632a469472c274b449ac2352d3f8159151','1','ari@elfawwaz.com',NULL)
,(2,'mario','f348ec98cc9f6c2f254bb0f798e822224f417a9afaa83619100f72163a65d2b816e95dd9948098d823fd0ad172417def7d2d48036d9ba1a8b2138fbdc7c6029d','1','mario@elfawwaz.com',NULL)
,(3,'beni','757bcad342783842b427782d4baea10733d97cc807c7347f388ddd4e4714d2c394a08cac3bfcda51bae7ea5298a5c992d08db85acacf2a82e01e94434616b285','beni@beni',NULL,NULL)
;