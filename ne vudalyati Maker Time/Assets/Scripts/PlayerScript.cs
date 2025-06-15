using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

 public class PlayerScript : MonoBehaviour
{
    private Rigidbody2D rb;
    public float moveH, moveV;
    [SerializeField] public float MoveSpeed = 1f ;
    [SerializeField] public int Health = 3;
    [SerializeField] Button button;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
     void Update()
    {
        moveH = Input.GetAxis("Horizontal") * MoveSpeed;
        moveV = Input.GetAxis("Vertical") * MoveSpeed;
        rb.velocity = new Vector2(moveH, moveV);
        if (Health<= 0)
        {
            SceneManager.LoadScene(0);
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Coins")
        {
            Debug.Log("skill");
            Destroy(collision.gameObject);
        }
        if (collision.gameObject.tag == "Enemy")
        {
            Debug.Log("unskill");
            Health--;
        }
        if (collision.gameObject.name == "NPC 1")
        {
            button.onClick.RemoveAllListeners();
            button.onClick.AddListener(() => FindObjectOfType<Dialoges>().OpenDialog(collision.gameObject.GetComponent<SpriteRenderer>().sprite, "Bogdan", "Hello! Try to go over Death Canyon and Talk with Yarik"));
        }
        if (collision.gameObject.tag == "Finish")
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
        }
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        
        if (collision.gameObject.name == "NPC 1")
        {
          
            button.onClick.RemoveAllListeners();
        }

    }


}
