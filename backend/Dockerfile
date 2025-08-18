FROM python:3.13

RUN apt-get update && apt-get install -y openssh-client build-essential postgresql-client libpq-dev && apt-get clean


ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app

COPY wait-for-postgres.sh /wait-for-postgres.sh
RUN chmod +x /wait-for-postgres.sh

CMD ["uvicorn", "core.asgi:application", "--host", "0.0.0.0", "--port", "8000"]