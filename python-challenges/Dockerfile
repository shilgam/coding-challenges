FROM python:3.7

WORKDIR /usr/src/

COPY requirements.txt ./

RUN pip install -r ./requirements.txt

ENV PYTHONUNBUFFERED 1

COPY ./app ./app
