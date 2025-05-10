using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TouchingObjects : MonoBehaviour
{
    int health = 5;
    Transform spawnPoint;
    Rigidbody2D rb;
    [SerializeField] Slider hpSlider;
    [SerializeField] Image fillArea;

    private void Awake()
    {
        spawnPoint = GameObject.Find("SpawnPoint").transform;
        rb = GetComponent<Rigidbody2D>();
    }

    void Damage(int value)
    {
        rb.velocity = Vector2.zero;
        rb.angularVelocity = 0;
        rb.isKinematic = true;
        transform.position = spawnPoint.position;
        health -= value;
        hpSlider.value = health;
        if(health < 5)
        {
            fillArea.color = Color.yellow;
        }else if (
            health < 3)
        {
            fillArea.color = Color.grey;

        }
        else
        {
            fillArea.color = Color.cyan;
        }
        if(health < 0)
        {
            Debug.Log("I Died");
            FindObjectOfType<PlayerLaunch>().isStarted = false;
            FindObjectOfType<ResultControler>().StopWatch();
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Obstacles"))
        {
            Damage(collision.gameObject.GetComponent<ObstacleSettings>().damageValue);

        }
        if (collision.gameObject.CompareTag("Finish"))
        {
            Destroy(gameObject);
            Debug.Log("Congratulations you are loser");
            FindObjectOfType<ResultControler>().SaveResult();
        }
    }
}
